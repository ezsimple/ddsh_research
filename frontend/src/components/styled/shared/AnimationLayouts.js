import styled from 'styled-components';
import { Div } from './Layouts';
import aniKey from '../Keyframes';

export const HeartBeat = styled(Div)`
  animation: ${(props) => props.play && aniKey.heartBeat}
    ${(props) => props.duration || '2'}s infinite;
  animation-play-state: ${(props) => props.playState || 'running'};
`;

const AnimationLayouts = {
  HeartBeat,
};

export default AnimationLayouts;
