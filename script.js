const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const launchCommands = [
  'python -m pip install -r requirements-viewer.txt',
  'python scripts/launch_demo.py wrist --interactive',
  'python scripts/launch_demo.py cup-pour',
  'python scripts/launch_demo.py hammer-nail',
  'python scripts/launch_demo.py brush-sweep',
].join('\n');

const projects = {
  craft: {
    title: 'CRAFT-W · URDF & Wrist Demos',
    category: 'Robot models / Wrist manipulation',
    description: '基于 CAD 的 CRAFT 手与腕部描述，包含 23 个连杆、22 个旋转关节和 17 个独立关节坐标。五个手指末端关节通过 URDF mimic 跟随父关节。',
    context: '腕部采用暂定 ±15° 的双轴串联近似。操作视频为原速脚本仿真，采用固定支撑和理想刚性握持，倾倒使用颗粒代理。挥锤和倾倒场景中的 CR3 保持固定。',
    source: 'https://github.com/fslee2/Craft_wrist-URDF',
    sourceLabel: 'Code & launchers ↗',
    media: [
      { label: "Cup pouring", video: "assets/craft-w/cup-pour.mp4", poster: "assets/craft-w/pour-in-motion.jpg", alt: "Wrist-driven cup pouring · MuJoCo simulation", description: "Wrist-driven cup pouring · MuJoCo simulation" },
      { label: 'Joint preview', video: 'assets/craft-w/urdf-joints.mp4', poster: 'assets/craft-w/urdf-joints.jpg', alt: 'CRAFT-W wrist, finger, and thumb joint motion', description: 'CAD-based kinematic preview · 17 independent coordinates. Open the viewer locally to use the joint-angle sliders.' },
      { label: 'Hammering', video: 'assets/craft-w/hammer-nail.mp4', poster: 'assets/craft-w/hammer-nail.jpg', alt: 'Wrist-driven hammering simulation', description: '握住扫描锤子，沿四指延伸方向挥动腕部，完成敲钉动作。Scripted simulation · 1× speed.' },
      { label: 'Brush sweeping', video: 'assets/craft-w/brush-sweep.mp4', poster: 'assets/craft-w/brush-sweep.jpg', alt: 'Wrist-driven tabletop brush sweeping simulation', description: '通过腕部运动保持刷毛与桌面接触，将碎屑推入收集区域。Scripted simulation · 1× speed.' },
    ],
    extra: `<h3>Model controls & integration</h3><p>克隆仓库后使用 Python 3.12。在查看器右侧展开 Control，调整 17 个独立关节角度。五个依赖关节会自动跟随父关节。</p><p><a href="https://github.com/fslee2/Craft_wrist-URDF/blob/main/docs/INTEGRATION.md" target="_blank" rel="noreferrer">Integration guide ↗</a></p>`,
    commands: true,
  },
  dummy: {
    title: 'Dummy V2 · Model to Control',
    category: 'Robot models / Browser interface',
    description: '基于 Dummy V2 平台，连接机械臂描述、夹爪与相机模型，以及本地网页上位机。当前默认装配包含夹爪、深度相机和支架。',
    context: '分拣录像来自 Isaac Sim，使用全景和腕部双视角。浏览器控制截图来自 mock 会话。J1–J5 控制机械臂姿态，J6 驱动夹爪，相机随 J5 运动。HostApp 源码目前维护在本地，硬件功能仍在验证中。',
    source: 'https://github.com/fslee2/fslee2/blob/main/projects/dummy-v2.md',
    sourceLabel: 'Project notes ↗',
    media: [
      { label: "Shape sorting", video: "assets/dummy-v2/shape-sorter.mp4", poster: "assets/dummy-v2/shape-sorter.jpg", alt: "Shape sorting in Isaac Sim · External and wrist cameras", description: "Shape sorting in Isaac Sim · External and wrist cameras" },
      { label: 'Joint controls', image: 'assets/dummy-v2/web-control.png', alt: 'Dummy V2 joint controls and robot model in a mock session', description: 'Current model · browser joint controls · mock session.' },
      { label: 'FK / IK preview', image: 'assets/dummy-v2/planning-preview.png', alt: 'Dummy V2 Cartesian target and translucent future IK pose in a mock session', description: 'Cartesian target · IK ghost pose · mock session.' },
    ],
    extra: `<h3>Model, planning & control</h3><ul><li>保留 CAD 颜色的 URDF 与 STL 视觉模型。</li><li>关节目标、笛卡尔 FK/IK、可拖动目标与未来位姿预览。</li><li>示教录放、标定界面和模型参数管理。</li><li>重力补偿、参数辨识与柔顺控制实验。</li></ul><p><a href="mailto:12310115@mail.sustech.edu.cn?subject=Dummy%20V2%20project">Get in touch about Dummy V2 ↗</a></p>`,
  },
  pac: {
    title: 'PAC-ACT · Contact Manipulation',
    category: 'Robot learning / Contact RL',
    description: '基于 MuJoCo Metal–Rubber 接触场景，用动作块 PPO 微调预训练 ACT 策略，研究接触奖励、KL anchoring 和策略适配。',
    context: 'ACT · PPO · MuJoCo · contact manipulation',
    source: 'https://github.com/fslee2/PAC-ACT',
    sourceLabel: 'View repository ↗',
    media: [
      { label: "ACT baseline", video: "assets/pac-act/act-contact.mp4", poster: "assets/pac-act/act-contact.jpg", alt: "ACT baseline · Metal–rubber contact in MuJoCo", description: "ACT baseline · Metal–rubber contact in MuJoCo" },
      { label: 'Contact setup', image: 'assets/pac-act/pac_act_contact_setup.png', alt: 'PAC-ACT robot arm and depth-camera contact manipulation setup', description: 'Robot and depth-camera setup for contact manipulation.' },
      { label: 'Architecture', image: 'assets/pac-act/pac_act_architecture.png', alt: 'PAC-ACT method architecture', description: 'PAC-ACT method architecture from the project assets.' },
    ],
  },
  teleop: {
    title: 'CR3 × CRAFT · DexJoCo Teleop',
    category: 'Dexterous teleoperation',
    description: '连接 CR3 机械臂、CRAFT 灵巧手、MediaPipe / HaMeR 与 MuJoCo，构建单目遥操作链路，持续推进受保护的 15 电机 Sim2Real。',
    context: 'MuJoCo · MediaPipe · Python · Sim2Real',
    source: 'https://github.com/fslee2/Dexjuco_cr3_crafthand',
    sourceLabel: 'View showcase ↗',
    media: [
      { label: "Cartesian motion", video: "assets/dexjoco/x-axis.mp4", poster: "assets/dexjoco/x-axis.jpg", alt: "Scripted X-axis motion and finger flexion · DexJoCo", description: "Scripted X-axis motion and finger flexion · DexJoCo" },
      { label: 'Camera views', image: 'assets/dexjoco/cr3_craft_camera_grid.jpg', alt: 'Multiple camera views of the CR3 and CRAFT hand environment', description: 'Multiple camera views from the simulation scene.' },
    ],
  },
  bimanual: {
    title: 'Bimanual Imitation',
    category: 'Robot learning / Imitation',
    description: '双臂 quad-insertion 环境、LeRobot 数据转换、ACT 推理和 MuJoCo / PPO 验证。',
    context: 'ACT · LeRobot · MuJoCo · policy validation',
    source: 'https://github.com/fslee2/biman_imitation_pyj_verison',
    sourceLabel: 'View repository ↗',
    media: [
      { label: "Policy rollout", video: "assets/bimanual/policy-rollout.mp4", poster: "assets/bimanual/policy-rollout.jpg", alt: "Bimanual policy rollout · MuJoCo simulation", description: "Bimanual policy rollout · MuJoCo simulation" },
    ],
  },
  retarget: {
    title: 'AnyDexRetarget × CRAFT',
    category: 'Hand retargeting',
    description: '用优化式重定向把 MediaPipe 手部关键点映射到 20 关节仿真模型，同时保留 15 个独立实机变量。',
    context: 'Retargeting · MJCF · Dynamixel',
    source: 'mailto:12310115@mail.sustech.edu.cn?subject=CRAFT%20retargeting%20project',
    sourceLabel: 'Ask about the project ↗',
    media: [
      { label: 'Open', image: 'assets/anydex/craft_open.png', alt: 'CRAFT hand open pose', description: 'Open-hand retargeting pose.' },
      { label: 'Fist', image: 'assets/anydex/craft_fist_15dof.png', alt: 'CRAFT hand fist pose with 15 independent variables', description: 'Fist pose with 15 independent variables.' },
      { label: 'Pinch', image: 'assets/anydex/craft_thumb_index_pinch.png', alt: 'CRAFT hand thumb-index pinch pose', description: 'Thumb-index pinch pose.' },
    ],
  },
  mes: {
    title: 'PACK MES System',
    category: 'Course project / Manufacturing systems',
    description: '面向新能源电池包自动化产线的制造执行系统，覆盖生产计划、工序执行、质量管理、库存和产品全流程追溯。',
    context: 'Spring Boot · Vue 3 · MySQL · MES',
    source: 'mailto:12310115@mail.sustech.edu.cn?subject=PACK%20MES%20project',
    sourceLabel: 'Project details ↗',
    media: [{ label: 'Dashboard', image: 'assets/pack-mes/dashboard-real.png', alt: 'PACK MES manufacturing dashboard', description: 'Production workflow and manufacturing execution dashboard.' }],
  },
  assets: {
    title: 'CR3 Robot Assets',
    category: 'Robot description / Reusable assets',
    description: '整理可复用的 CR3 MuJoCo XML / MJCF、URDF、Xacro 和网格资源，服务于后续控制与仿真任务。',
    context: 'URDF · MJCF · ROS 2 · robot geometry',
    source: 'https://github.com/fslee2/cr3-robot-description-assets',
    sourceLabel: 'View repository ↗',
    media: [
      { label: "Model orbit", video: "assets/cr3-description/model-orbit.mp4", poster: "assets/cr3-description/model-orbit.jpg", alt: "CR3 arm and CRAFT Hand · MJCF model orbit", description: "CR3 arm and CRAFT Hand · MJCF model orbit" },
    ],
  },
  teacher: {
    title: 'CR3 × CRAFT Hand / MuJoCo',
    category: 'Robot teleoperation',
    description: 'CR3 机械臂与 CRAFT Hand 的 MuJoCo 遥操作仓库，包含小键盘笛卡尔控制、MediaPipe 手部跟踪和躯干示教流程。',
    context: 'MuJoCo · MediaPipe · OpenCV',
    source: 'https://github.com/fslee2/Dobot-CraftHand',
    sourceLabel: 'View repository ↗',
    media: [
      { label: "Cartesian reach", video: "assets/teleop-teacher/cartesian-reach.mp4", poster: "assets/teleop-teacher/cartesian-reach.jpg", alt: "Programmed Cartesian reach · MuJoCo kinematic preview", description: "Programmed Cartesian reach · MuJoCo kinematic preview" },
      { label: 'Teleoperation scene', image: 'assets/teleop-teacher/teleop_teacher_mujoco.png', alt: 'CR3 arm and CRAFT Hand MuJoCo teleoperation scene', description: 'CR3 arm and CRAFT Hand in the MuJoCo teleoperation environment.' },
    ],
  },
};

const dialog = document.querySelector('.project-dialog');
const video = document.getElementById('dialog-video');
const image = document.getElementById('dialog-image');
const mediaTabs = document.getElementById('dialog-tabs');
const mediaPanel = document.getElementById('dialog-media');
const mediaDescription = document.getElementById('media-description');
let activeProject;
let activeMedia = 0;

function selectMedia(index) {
  activeMedia = index;
  const media = activeProject.media[index];
  const tabs = [...mediaTabs.children];
  tabs.forEach((tab, position) => {
    const selected = position === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  mediaPanel.setAttribute('aria-labelledby', tabs[index].id);
  video.pause();
  video.hidden = !media.video;
  image.hidden = Boolean(media.video);
  if (media.video) {
    video.src = media.video;
    video.poster = media.poster;
    video.setAttribute('aria-label', media.alt);
    video.muted = true;
    video.loop = true;
    if (!motionPreference.matches) video.play().catch(() => {});
  } else {
    video.removeAttribute('src');
    video.load();
    image.src = media.image;
    image.alt = media.alt;
  }
  mediaDescription.textContent = media.description;
}

function addLaunchCommands(container) {
  const commandSection = document.createElement('section');
  commandSection.innerHTML = `<div class="command-header"><h3>Run locally</h3><button type="button">Copy commands</button></div><pre></pre><p class="copy-status" role="status" aria-live="polite"></p>`;
  commandSection.querySelector('pre').textContent = launchCommands;
  commandSection.querySelector('button').addEventListener('click', async () => {
    const status = commandSection.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(launchCommands);
      status.textContent = 'Commands copied.';
    } catch {
      status.textContent = '可直接选中上方命令进行复制。';
    }
  });
  container.append(commandSection);
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.inline-preview').forEach(preview => preview.pause());
    activeProject = projects[button.dataset.project];
    document.getElementById('dialog-title').textContent = activeProject.title;
    document.getElementById('dialog-category').textContent = activeProject.category;
    document.getElementById('dialog-description').textContent = activeProject.description;
    document.getElementById('dialog-context').textContent = activeProject.context;
    const source = document.getElementById('dialog-source');
    source.href = activeProject.source;
    source.textContent = activeProject.sourceLabel;
    mediaTabs.replaceChildren();
    activeProject.media.forEach((media, index) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.id = `media-tab-${index}`;
      tab.textContent = media.label;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', 'dialog-media');
      tab.addEventListener('click', () => selectMedia(index));
      mediaTabs.append(tab);
    });
    const extra = document.getElementById('dialog-extra');
    extra.innerHTML = activeProject.extra || '';
    if (activeProject.commands) addLaunchCommands(extra);
    dialog.showModal();
    selectMedia(0);
    dialog.scrollTop = 0;
  });
});

mediaTabs.addEventListener('keydown', event => {
  const count = activeProject.media.length;
  let next;
  switch (event.key) {
    case 'ArrowRight': next = (activeMedia + 1) % count; break;
    case 'ArrowLeft': next = (activeMedia - 1 + count) % count; break;
    case 'Home': next = 0; break;
    case 'End': next = count - 1; break;
    default: return;
  }
  event.preventDefault();
  selectMedia(next);
  mediaTabs.children[next].focus();
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => video.pause());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right
    || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

const navigation = [...document.querySelectorAll('.section-nav a')];
const sections = [...document.querySelectorAll('[data-nav-section]')];
function updateNavigation() {
  const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= innerHeight * .3) || sections[0];
  navigation.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
addEventListener('scroll', updateNavigation, { passive: true });
addEventListener('resize', updateNavigation);
updateNavigation();

document.querySelectorAll('[data-copy-bib]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = button.closest('details').querySelector('.bib-status');
    try {
      await navigator.clipboard.writeText(document.getElementById(button.dataset.copyBib).textContent);
      status.textContent = 'Citation copied.';
    } catch {
      status.textContent = 'Select the citation text to copy it.';
    }
  });
});
motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) {
    video.pause();
    document.querySelectorAll('.inline-preview').forEach(preview => preview.pause());
  }
});

// Keep simultaneous project previews from competing for attention.
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLVideoElement)) return;
  document.querySelectorAll('.inline-preview').forEach(preview => {
    if (preview !== event.target && !preview.paused) preview.pause();
  });
}, true);

const archive = document.querySelector('.project-archive');
archive.addEventListener('toggle', () => {
  if (!archive.open) archive.querySelectorAll('video').forEach(preview => preview.pause());
});
