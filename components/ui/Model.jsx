import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Model = ({ animationName = 'Idle2', ...props }) => {
    const group = useRef();

    const { scene } = useGLTF('/animations/manInSuit.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    const { animations: idleAnimation } = useFBX('animations/Idle2.fbx');
    const { animations: saluteAnimation } = useFBX('animations/MeetingFemale.fbx');
    const { animations: clappingAnimation } = useFBX('animations/Typing1.fbx');
    const { animations: victoryAnimation } = useFBX('animations/Talking_0.fbx');

    idleAnimation[0].name = 'Idle2';
    saluteAnimation[0].name = 'MeetingFemale';
    clappingAnimation[0].name = 'Typing1';
    victoryAnimation[0].name = 'Talking_0';

    const { actions, mixer } = useAnimations(
        [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
        group,
    );

    // useEffect(() => {
    //   actions[animationName].reset().fadeIn(0.5).play();
    //   return () => actions[animationName].fadeOut(0.5);
    // }, [animationName]);

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName]
                .reset()
                .fadeIn(mixer?.stats?.actions?.inUse === 0 ? 0 : 0.5)
                .play();
        }

        return () => {
            if (actions[animationName]) {
                actions[animationName].fadeOut(0.5);
            }
        };
    }, [animationName, actions, mixer]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={clone} />
        </group>
    )
}


useGLTF.preload('/animations/manInSuit.glb');
export default Model;

