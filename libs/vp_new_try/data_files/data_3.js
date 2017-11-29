var pts = 'M63.6088,162.06 L68.9966,135.014 L53.0593,109.418 L61.5895,84.058 L89.8982,82.4486 L116.989,96.7698 L119.714,129.225 L109.037,160.077 L87.398,181.495 L51.3136,179.533 L26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 L63.4912,54.2476 L101.501,51.6105 L129.973,37.2464 L124.372,9.71604 L93.2498,0.527618 L64.6382,11.2048 L36.4961,33.9087 L12.7771,69.6474 L0.505563,113.439 L3.51726,157.011 L16.0077,186.843 L53.2382,204.104 L101.88,202.562 L132.572,165.082 L138.693,129.526 L132.515,81.2738 L101.501,51.6105 L63.4912,54.2476 L35.3417,77.4143 L21.7182,118.87 L26.2143,156.446 Z'; var polys = {"0":"M63.6088,162.06 L26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 L45.0453,69.4284 L53.0593,109.418 L68.9966,135.014 Z","1":"M68.9966,135.014 L63.6088,162.06 L26.2143,156.446 L21.7182,118.87 L34.5785,79.7367 L53.0593,109.418 Z","10":"M26.2143,156.446 L51.3136,179.533 L77.2001,203.344 L53.2382,204.104 L16.0077,186.843 L3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 L15.3626,65.7516 L21.7182,118.87 Z","11":"M21.7182,118.87 L26.2143,156.446 L30.6644,193.638 L16.0077,186.843 L3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 L54.3804,19.4804 L35.3417,77.4143 Z","12":"M35.3417,77.4143 L21.7182,118.87 L6.69202,164.594 L3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L119.389,8.24467 L63.4912,54.2476 Z","13":"M63.4912,54.2476 L35.3417,77.4143 L3.1845,103.879 L12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 L129.973,37.2464 L101.501,51.6105 Z","14":"M101.501,51.6105 L63.4912,54.2476 L21.043,57.1926 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 L129.973,37.2464 Z","15":"M129.973,37.2464 L101.501,51.6105 L63.4912,54.2476 L14.7202,66.7196 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 Z","16":"M124.372,9.71604 L129.973,37.2464 L101.501,51.6105 L63.4912,54.2476 L5.13024,96.9358 L12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 Z","17":"M93.2498,0.527618 L124.372,9.71604 L129.973,37.2464 L101.501,51.6105 L63.4912,54.2476 L35.3417,77.4143 L1.15311,122.808 L0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 Z","18":"M64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 L129.973,37.2464 L101.501,51.6105 L63.4912,54.2476 L35.3417,77.4143 L3.05846,150.374 L0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 Z","19":"M36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 L129.973,37.2464 L101.501,51.6105 L63.4912,54.2476 L35.3417,77.4143 L21.7182,118.87 L11.6892,176.529 L3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 Z","2":"M53.0593,109.418 L68.9966,135.014 L63.6088,162.06 L26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 L63.4912,54.2476 L71.8109,53.6704 L61.5895,84.058 Z","20":"M12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L124.372,9.71604 L129.363,34.2451 L63.4912,54.2476 L35.3417,77.4143 L21.7182,118.87 L26.2143,156.446 L32.0731,194.291 L16.0077,186.843 L3.51726,157.011 L0.505563,113.439 Z","21":"M0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 L64.6382,11.2048 L93.2498,0.527618 L106.04,4.30359 L35.3417,77.4143 L21.7182,118.87 L26.2143,156.446 L54.6761,204.058 L53.2382,204.104 L16.0077,186.843 L3.51726,157.011 Z","22":"M3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 L36.4961,33.9087 L60.4686,14.5687 L35.3417,77.4143 L21.7182,118.87 L26.2143,156.446 L51.3136,179.533 L100.293,202.612 L53.2382,204.104 L16.0077,186.843 Z","23":"M16.0077,186.843 L3.51726,157.011 L0.505563,113.439 L12.7771,69.6474 L27.7486,47.089 L21.7182,118.87 L26.2143,156.446 L51.3136,179.533 L87.398,181.495 L121.205,178.963 L101.88,202.562 L53.2382,204.104 Z","24":"M53.2382,204.104 L16.0077,186.843 L3.51726,157.011 L0.505563,113.439 L0.942875,111.879 L26.2143,156.446 L51.3136,179.533 L87.398,181.495 L135.192,149.864 L132.572,165.082 L101.88,202.562 Z","25":"M101.88,202.562 L53.2382,204.104 L16.0077,186.843 L3.90758,157.944 L51.3136,179.533 L87.398,181.495 L109.037,160.077 L119.714,129.225 L131.59,80.3893 L132.515,81.2738 L138.693,129.526 L132.572,165.082 Z","26":"M132.572,165.082 L101.88,202.562 L53.2382,204.104 L40.9083,198.387 L87.398,181.495 L109.037,160.077 L119.714,129.225 L116.989,96.7698 L108.135,57.9554 L132.515,81.2738 L138.693,129.526 Z","27":"M138.693,129.526 L132.572,165.082 L101.88,202.562 L66.716,203.676 L109.037,160.077 L119.714,129.225 L116.989,96.7698 L87.7008,52.568 L101.501,51.6105 L132.515,81.2738 Z","28":"M132.515,81.2738 L138.693,129.526 L132.572,165.082 L101.88,202.562 L100.122,202.617 L119.714,129.225 L116.989,96.7698 L89.8982,82.4486 L33.1734,84.0123 L35.3417,77.4143 L63.4912,54.2476 L101.501,51.6105 Z","29":"M101.501,51.6105 L132.515,81.2738 L138.693,129.526 L135.194,149.851 L116.989,96.7698 L89.8982,82.4486 L61.5895,84.058 L22.7931,115.599 L35.3417,77.4143 L63.4912,54.2476 Z","3":"M61.5895,84.058 L53.0593,109.418 L36.7105,158.022 L26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 L63.4912,54.2476 L101.501,51.6105 L131.283,80.0958 L89.8982,82.4486 Z","30":"M63.4912,54.2476 L101.501,51.6105 L132.515,81.2738 L136.483,112.265 L116.989,96.7698 L89.8982,82.4486 L61.5895,84.058 L53.0593,109.418 L43.6714,159.067 L26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 Z","31":"M35.3417,77.4143 L63.4912,54.2476 L101.501,51.6105 L132.515,81.2738 L133.177,86.4421 L89.8982,82.4486 L61.5895,84.058 L53.0593,109.418 L68.5291,137.361 L63.6088,162.06 L26.2143,156.446 L21.7182,118.87 Z","32":"M21.7182,118.87 L35.3417,77.4143 L63.4912,54.2476 L98.5155,51.8177 L61.5895,84.058 L53.0593,109.418 L68.9966,135.014 L63.6088,162.06 L26.2143,156.446 Z","33":"M26.2143,156.446 L21.7182,118.87 L35.3417,77.4143 L63.4912,54.2476 L76.602,53.338 L61.5895,84.058 L53.0593,109.418 L68.9966,135.014 L63.6088,162.06 Z","4":"M89.8982,82.4486 L61.5895,84.058 L32.6171,85.7051 L35.3417,77.4143 L63.4912,54.2476 L101.501,51.6105 L132.515,81.2738 L135.77,106.698 L116.989,96.7698 Z","5":"M116.989,96.7698 L89.8982,82.4486 L52.9548,62.9189 L63.4912,54.2476 L101.501,51.6105 L132.515,81.2738 L138.693,129.526 L132.572,165.082 L123.641,175.988 L119.714,129.225 Z","6":"M119.714,129.225 L116.989,96.7698 L114.218,63.7739 L132.515,81.2738 L138.693,129.526 L132.572,165.082 L101.88,202.562 L94.2518,202.803 L109.037,160.077 Z","7":"M109.037,160.077 L119.714,129.225 L133.539,89.2744 L138.693,129.526 L132.572,165.082 L101.88,202.562 L64.9308,203.733 L87.398,181.495 Z","8":"M87.398,181.495 L109.037,160.077 L138.445,130.971 L132.572,165.082 L101.88,202.562 L53.2382,204.104 L16.0077,186.843 L12.0529,177.398 L51.3136,179.533 Z","9":"M51.3136,179.533 L87.398,181.495 L117.778,183.148 L101.88,202.562 L53.2382,204.104 L16.0077,186.843 L3.51726,157.011 L1.93451,134.113 L26.2143,156.446 Z"}
;