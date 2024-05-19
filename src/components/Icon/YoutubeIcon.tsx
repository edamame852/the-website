import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const YoutubeIcon: FC<IconProps> = memo(props => (
    <Icon {...props}>
    
    {/* Working d path */}

    <path
    d="M 120.7837 31.7681 c -1.3843 -5.2075 -5.4492 -9.2944 -10.6128 -10.6787 C 100.8105 18.5625 63.2813 18.5625 63.2813 18.5625 S 25.752 18.5625 16.3916 21.0894 c -5.1636 1.3843 -9.2285 5.4712 -10.6128 10.6787 c -2.5049 9.4263 -2.5049 29.0698 -2.5049 29.0698 s 0 19.6436 2.5049 29.0698 c 1.3843 5.2075 5.4492 9.1187 10.6128 10.5029 C 25.752 102.9375 63.2813 102.9375 63.2813 102.9375 s 37.5293 0 46.8896 -2.5269 c 5.1636 -1.3843 9.2285 -5.3174 10.6128 -10.5029 c 2.5049 -9.4263 2.5049 -29.0698 2.5049 -29.0698 s 0 -19.6436 -2.5049 -29.0698 z m -69.7632 46.9116 V 42.9961 l 31.355 17.8418 l -31.355 17.8418 z"
    fill="currentColor"
    />

    {/* SHIT d path */}

    {/* <path
    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
    fill="currentColor"
    /> */}

    </Icon>
  ));
  
  export default YoutubeIcon;