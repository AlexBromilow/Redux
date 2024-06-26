import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`

.likes-heart {
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(-50%) translateY(-50%) scale(5);
  display: block;
}
.likes-heart.like-enter {
  transition: all 0.2s;
  transform: translateX(-50%) translateY(-50%) scale(1);
  opacity: 1;
}
.likes-heart.like-enter.like-enter-active {
  transform: translateX(-50%) translateY(-50%) scale(5);
}
.likes-heart .like-leave-active {
  display: none;
}


`;

export default Animations;
