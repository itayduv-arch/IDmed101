from pathlib import Path
import re
import subprocess

psy = Path('psycho101/index.html').read_text(encoding='utf-8')
med = Path('idmed101/index.html').read_text(encoding='utf-8')

checks = [
    ('psy daily maps', 'dailyResetFixVersion:5,dailyLessonStats:{},dailyTopicStats:{}' in psy),
    ('psy new-user streak', 'streak:0,answered:0' in psy),
    ('psy fresh sw', "sw.js?v=20260916-24" in psy),
    ('med local date', 'new Date().toISOString().slice(0,10)' not in med),
    ('med daily engine', 'function ensureMedDailyState()' in med and 'function registerMedStudyDay()' in med),
    ('med daily maps', 'dailyLessonStats' in med and 'dailyTopicStats' in med),
    ('med day-aware cloud merge', 'localDailyOk=localState.dailyDate===today' in med and 'remoteDailyOk=remoteState.dailyDate===today' in med and 'else out.todayAnswered=0;' in med),
    ('med streak fallback', 'appData.streak||1' not in med),
    ('med new-user static streak', 'id="home-streak">1 🔥' not in med and 'id="hero-streak">🔥 1' not in med),
    ('med dashboard no fake study', 'function updateHomeDashboard(){\n        ensureMedDailyState();' in med),
    ('med answer registers study', "ensureMedDailyState();\n        registerMedStudyDay();" in med),
]
failed = [name for name, ok in checks if not ok]
assert not failed, 'Invariant failures: ' + ', '.join(failed)

for name in ['psycho101/index.html', 'idmed101/index.html']:
    html = Path(name).read_text(encoding='utf-8')
    scripts = re.findall(r'<script([^>]*)>([\s\S]*?)</script>', html, re.I)
    checked = 0
    for attrs, src in scripts:
        if 'src=' in attrs.lower() or not src.strip():
            continue
        checked += 1
        f = Path(f'/tmp/{Path(name).parent.name}-{checked}.js')
        f.write_text(src, encoding='utf-8')
        subprocess.run(['node', '--check', str(f)], check=True)
    print(name, 'inline scripts checked:', checked)

print('All shared health checks passed')
