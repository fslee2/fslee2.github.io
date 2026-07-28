# Yujie Pang / fslee2

> Personal portfolio site: open `index.html` locally or publish this repository as a GitHub Pages site.

Robotics, bimanual imitation learning, dexterous manipulation, teleoperation, and embodied AI experiments.

I build small but complete robot systems: simulation assets, control scripts, camera/VR teleoperation tests, and imitation-learning pipelines that can move from a local prototype toward a publishable project.

## Project Snapshots

### Bimanual Imitation

Workspace: `F:\Mys_lab_data_bak\bimanual-imitation`
Repository: [biman_imitation_pyj_verison](https://github.com/fslee2/biman_imitation_pyj_verison)

![Bimanual policy rollout](assets/bimanual/bimanual_policy_rollout.gif)

![Bimanual validation frame](assets/bimanual/bimanual_validation_frame.jpg)

This project focuses on two-arm manipulation, LeRobot-style datasets, ACT-style policy inference, and MuJoCo validation rollouts.

### CR3 + CRAFT in DexJoCo

![CR3 CRAFT teleoperation demo](assets/dexjoco/cr3_craft_teleop.gif)

![CR3 CRAFT shell scene](assets/dexjoco/cr3_craft_shell_scene.jpg)

![CR3 CRAFT camera grid](assets/dexjoco/cr3_craft_camera_grid.jpg)

This work connects a CR3 arm and CRAFT dexterous hand into DexJoCo-style MuJoCo environments, with reusable XML/MJCF assets and teleoperation entry scripts.

### MetalTouch / CRAFT Hand Contact Work

Repository: [metaltouch-isaaclab-showcase](https://github.com/fslee2/metaltouch-isaaclab-showcase)

![Real robot tactile manipulation setup](assets/lab/real_robot_setup.jpg)

![Real-to-simulation abstraction for contact manipulation](assets/lab/real_to_sim_abstraction.jpg)

![Tactile contact closeup](assets/lab/tactile_contact_closeup.jpg)

This line of work is about contact-rich manipulation: real setup capture, simulation abstraction, tactile/contact observations, and robot-control experiments.

## Current Focus

- Bimanual imitation learning and policy validation.
- CR3 arm + CRAFT hand simulation assets.
- MuJoCo / DexJoCo task environments for robot teleoperation.
- Camera, keyboard, and VR input interfaces for robot control.
- Lightweight alternatives to heavy monocular 3D hand reconstruction.
- Real-to-simulation workflows for contact manipulation.

## Featured Repositories

- [cr3-craft-teleop-showcase](https://github.com/fslee2/cr3-craft-teleop-showcase): CR3 + CRAFT DexJoCo integration, teleop scripts, docs, screenshots, and GIF demos.
- [cr3-robot-description-assets](https://github.com/fslee2/cr3-robot-description-assets): MuJoCo XML / MJCF and URDF assets for CR3 + CRAFT simulation.
- [biman_imitation_pyj_verison](https://github.com/fslee2/biman_imitation_pyj_verison): bimanual quad-insertion imitation-learning workspace with MuJoCo, ACT, LeRobot conversion, and PPO/ACT validation.
- [metaltouch-isaaclab-showcase](https://github.com/fslee2/metaltouch-isaaclab-showcase): MetalTouch contact-manipulation task snapshot for Isaac Lab.
- [Dobot-CraftHand](https://github.com/fslee2/Dobot-CraftHand): CRAFT hand and robot-control experiments.
- [Lerobot_robomimic](https://github.com/fslee2/Lerobot_robomimic): robot learning and imitation-learning experiments.
- [JetArm-Dummy](https://github.com/fslee2/JetArm-Dummy): master-slave teleoperation between JetArm and Dummy.

## Main Robotics Stack

```text
Simulation      MuJoCo, DexJoCo
Robot assets    MJCF/XML, URDF, STL, MoveIt config
Teleoperation   MediaPipe, cameras, keyboard control, VR experiments
Robot learning  imitation learning, robomimic, LeRobot-style pipelines
Languages       Python, C/C++, shell scripting
Tools           GitHub, ROS2, uv, conda, WSL, Windows
```

## Recent Work

- Prepared bimanual imitation-learning datasets and validation rollouts.
- Extracted and organized CR3 robot-description assets.
- Connected CR3 arm + CRAFT hand assets into DexJoCo scenes.
- Built teleoperation scripts for camera and keyboard control.
- Organized real robot contact-manipulation visuals and real-to-sim notes.
- Documented Windows/WSL setup and project handoff notes.
