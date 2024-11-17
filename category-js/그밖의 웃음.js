document.addEventListener("DOMContentLoaded", () => {
    const images = [
      { file: '확대/이석훈_확대.png', hoverFile: '팝업/이석훈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '패션쇼에 선 김용준을 보고 웃음 참는 이석훈' },
      { file: '확대/박민영_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음사람_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/박뿜계_확대.png', hoverFile: '팝업/박뿜계_팝업.png', link: '박뿜계.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/마스크_확대.png', hoverFile: '팝업/마스크_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '영화 마스크 The Mask, 1994. 소심하고 평범하던 주인공도 마스크를 쓰면 초인적인 힘을 가진 불사신이 된다.' },
      { file: '확대/균하하하_확대.png', hoverFile: '팝업/균하하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유튜브 댓글에선 가끔씩 근하하하를 써 억지웃음을 표현하기도 한다.' },
      { file: '확대/영화스마일_확대.png', hoverFile: '팝업/영화스마일_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [스마일] ' },
      { file: '확대/토마스_확대.png', hoverFile: '팝업/토마스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/맘마맘마_확대.png', hoverFile: '팝업/맘마맘마_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '맘마맘마~! 원피스에 등장하는 몇몇 캐릭터는 정해진 웃음소리가 있는데, 각 캐릭터의 능력이나 특징이 웃음소리에 반영되는 경우가 많다.' },
      { file: '확대/욕망의항아리입_확대.png', hoverFile: '팝업/욕망의항아리입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '욕망의 항아리. 유희왕 오피셜 카드게임에서 드로우 카드의 대명사라고 부를 만한 존재지만, 그 성능보다 특유의 못생김으로 유명하다. ' },
      { file: '확대/기침사건_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/세균맨입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/어노잉_확대.png', hoverFile: '팝업/어노잉_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '어노잉오렌지(The Annoying Orange)는 데인보(Daneboe)가 제작한 유튜브 단편 코미디 시리즈다. 주연 4인방 모두 제작자 데인보 본인이 연기했다.' },
      { file: '확대/샬롯링링_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/말웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/낄낄_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/스폰지밥_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/우하하_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/손담비입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하회탈_확대.png', hoverFile: '팝업/하회탈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '양반탈은 위로 향하면 웃는 얼굴, 밑을 향하면 성난 얼굴로 표정변화가 일어나도록 인체공학적으로 조각되어 있다. ' },
      { file: '확대/물개웃음입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는사람_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음캐릭터_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/홍진호_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/안영미입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/욕망의항아리눈_확대.png', hoverFile: '팝업/욕망의항아리눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '욕망의 항아리. 유희왕 오피셜 카드게임에서 드로우 카드의 대명사라고 부를 만한 존재지만, 그 성능보다 특유의 강렬한 못생김으로 유명하다. ' },
      { file: '확대/영화삐에로_확대.png', hoverFile: '팝업/영화삐에로_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [그것] 속 삐에로 살인마  ' },
      { file: '확대/권오중_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/세균맨눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/킥킥_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하츠네입_확대.png', hoverFile: '팝업/하츠네입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/지성_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/썩소_확대.png', hoverFile: '팝업/썩소_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '아역배우 왕석현은 만 5세이던 2008년, 영화 <과속스캔들>에서 특유의 썩소(썩은 미소) 표정으로 인기를 끌었다.' },
      { file: '확대/흐흐흐_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/씰룩씰룩_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/킬킬킬_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/음흉한웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/가이포크스_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃음가스_확대.png', hoverFile: '팝업/웃음가스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '웃음가스치료' },
      { file: '확대/그라라라_확대.png', hoverFile: '팝업/그라라라_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '그라라라' },
      { file: '확대/초록머리_확대.png', hoverFile: '팝업/초록머리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유희왕 ARC-V의 등장인물 린의 썩소.' },
      { file: '확대/핑구_확대.png', hoverFile: '팝업/핑구_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '핑구의 웃음소리는 유투버 침착맨의 것과 유사해 [침착맨을 삼킨 동물] 이라는 별명이 있다.' },
      { file: '확대/올드보이_확대.png', hoverFile: '팝업/올드보이_팝업.png', link: '올드보이.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/부엉이_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/미소지기_확대.png', hoverFile: '팝업/미소지기_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/씨익_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/유병재_확대.png', hoverFile: '팝업/유병재_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유병재의 <웃으면안되는 생일파티>. 말 그대로 웃지 않고 무표정으로 유병재의 생일을 축하해 주는 행사다. 웃음을 보이는 참가자들은 한 번의 옐로카드 경고, 두 번째엔 퇴장되어 [스마일 프리존]으로 격리된다.' },
      { file: '확대/파리웃참_확대.png', hoverFile: '팝업/파리웃참_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는개_확대.png', hoverFile: '팝업/웃는개_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '남경운 씨가 저작자라고 알려진 [웃는 개죽이] 라는 합성물로, 한 커뮤니티에서 시작되어 행외로 퍼져 나갔다.' },
      { file: '확대/손담비눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/푸흡눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/푸흡입_확대.png', hoverFile: '팝업/푸흡입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '반분 - 입 속에 있는 밥을 내뿜는다는 뜻으로, 참을 수가 없어서 웃음이 터져 나옴을 이르는 말.' },
      { file: '확대/하츠네눈_확대.png', hoverFile: '팝업/하츠네눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/티모_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/루피_확대.png', hoverFile: '팝업/루피_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '군침이 싹 도는 잔망루피는 트위터에서 양말의 뒷면으로 유명한 사진을 이용하여 장난식으로 올린 트윗으로 인해 시작되었다.' },
      { file: '확대/팬암뒤센_확대.png', hoverFile: '팝업/팬암뒤센_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/뒤센팬암_확대.png', hoverFile: '팝업/뒤센팬암_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/입꼬리.png', hoverFile: '팝업/입꼬리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '박정민(SS501), 썩소의 창시자이자 선구자로 박썩소라는 별명이 있다.' },
      { file: '확대/타조_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/사이렌_확대.png', hoverFile: '팝업/사이렌_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '온화한 미소의 세이렌(siren)은 사실 아름다운 노랫소리로 선원들을 유혹해 바다에 뛰어들어 죽게 만드는 전설의 동물이다.' },
      { file: '확대/캐릭터웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/오랑우탄_확대.png', hoverFile: '팝업/오랑우탄_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소문만복래(笑門萬福來), 웃는(화목한) 집안에 많은 복이 깃든다.' },
      { file: '확대/중국웃음_확대.png', hoverFile: '팝업/중국웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '이순구, 『웃는 얼굴』' },
      { file: '확대/얼굴근육_확대.png', hoverFile: '팝업/얼굴근육_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '미국의 심리학자 폴 에크만(Paul Ekman)은 연구를 통해 인간은 얼굴 근육 42개를 조합해 모두 19가지 미소를 만들 수 있지만, 그 중 하나만 진짜 웃음이고 나머지 18개는 모두 가짜 웃음임을 밝혀냈다. ' },
      { file: '확대/미소세상_확대.png', hoverFile: '팝업/미소세상_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/양웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/안영미눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/동물웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/나무늘보_확대.png', hoverFile: '팝업/나무늘보_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '나무늘보는 365일 웃는 얼굴이다.' },
      { file: '확대/짱구_확대.png', hoverFile: '팝업/짱구_팝업.png', link: '짱구.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/돼지_확대.png', hoverFile: '팝업/돼지_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는기와_확대.png', hoverFile: '팝업/웃는기와_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '얼굴무늬 수막새. 신라 시대의 기와 유물로, 인상적인 푸근한 미소 덕분에 일명 신라의 미소 혹은 천년의 미소로 신라 또는 경주시를 상징하는 유물로 자리잡았다.' },
      { file: '확대/으흐흐_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/조커_확대.png', hoverFile: '팝업/조커_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '조커병, 감정실금 - 자신의 의지, 현장의 분위기 등과 관계없이 감정을 통제하지 못해 웃음이 나올 상황이 아님에도 박장대소를 하거나, 눈물이 나올 상황이 아님에도 울음이 나고 이를 본인의 의지로 멈추지 못하는 감정 조절 기능 장애다.' },
      { file: '확대/혜리교관_확대.png', hoverFile: '팝업/혜리교관_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[진짜사나이] 여군특집에서, 군기를 잡던 터미네이터 분대장이 혜리의 애교에 터져나오는 미소를 참지 못한 사건이다.' },
      { file: '확대/영화쏘우_확대.png', hoverFile: '팝업/영화쏘우_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '게임을 시작하지..' },
      { file: '확대/깔깔_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/침착맨_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/팀쿡_확대.png', hoverFile: '팝업/팀쿡_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: 'Apple 제7대 CEO 팀 쿡 (Tim Cook)의 미소. 어렸을 때부터 현재까지의 웃는 사진은 모두 왼쪽 입꼬리가 오른쪽에 비해 살짝 올라가 있어 전형적인 썩소 느낌이 난다.' },
      { file: '확대/해피데스데이_확대.png', hoverFile: '팝업/해피데스데이_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/교관웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/박뿜계_확대.png', hoverFile: '팝업/박뿜계_팝업.png', link: '박뿜계.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/깔깔_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/욕망의항아리눈_확대.png', hoverFile: '팝업/욕망의항아리눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '욕망의 항아리. 유희왕 오피셜 카드게임에서 드로우 카드의 대명사라고 부를 만한 존재지만, 그 성능보다 특유의 강렬한 못생김으로 유명하다. ' },
      { file: '확대/웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/씨익_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/중국웃음_확대.png', hoverFile: '팝업/중국웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '이순구, 『웃는 얼굴』' },
      { file: '확대/유병재_확대.png', hoverFile: '팝업/유병재_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유병재의 <웃으면안되는 생일파티>. 말 그대로 웃지 않고 무표정으로 유병재의 생일을 축하해 주는 행사다. 웃음을 보이는 참가자들은 한 번의 옐로카드 경고, 두 번째엔 퇴장되어 [스마일 프리존]으로 격리된다.' },
      { file: '확대/맘마맘마_확대.png', hoverFile: '팝업/맘마맘마_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '맘마맘마~! 원피스에 등장하는 몇몇 캐릭터는 정해진 웃음소리가 있는데, 각 캐릭터의 능력이나 특징이 웃음소리에 반영되는 경우가 많다.' },
      { file: '확대/지성_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/우하하_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하츠네입_확대.png', hoverFile: '팝업/하츠네입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/욕망의항아리입_확대.png', hoverFile: '팝업/욕망의항아리입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '욕망의 항아리. 유희왕 오피셜 카드게임에서 드로우 카드의 대명사라고 부를 만한 존재지만, 그 성능보다 특유의 못생김으로 유명하다. ' },
      { file: '확대/안영미눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/균하하하_확대.png', hoverFile: '팝업/균하하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유튜브 댓글에선 가끔씩 근하하하를 써 억지웃음을 표현하기도 한다.' },
      { file: '확대/푸흡입_확대.png', hoverFile: '팝업/푸흡입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '반분 - 입 속에 있는 밥을 내뿜는다는 뜻으로, 참을 수가 없어서 웃음이 터져 나옴을 이르는 말.' },
      { file: '확대/어노잉_확대.png', hoverFile: '팝업/어노잉_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '어노잉오렌지(The Annoying Orange)는 데인보(Daneboe)가 제작한 유튜브 단편 코미디 시리즈다. 주연 4인방 모두 제작자 데인보 본인이 연기했다.' },
      { file: '확대/푸흡눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/세균맨눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/박민영_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하츠네눈_확대.png', hoverFile: '팝업/하츠네눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/뒤센팬암_확대.png', hoverFile: '팝업/뒤센팬암_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/홍진호_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/토마스_확대.png', hoverFile: '팝업/토마스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/미소지기_확대.png', hoverFile: '팝업/미소지기_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/팬암뒤센_확대.png', hoverFile: '팝업/팬암뒤센_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화스마일_확대.png', hoverFile: '팝업/영화스마일_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [스마일] ' },
      { file: '확대/세균맨입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는개_확대.png', hoverFile: '팝업/웃는개_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '남경운 씨가 저작자라고 알려진 [웃는 개죽이] 라는 합성물로, 한 커뮤니티에서 시작되어 행외로 퍼져 나갔다.' },
      { file: '확대/짱구_확대.png', hoverFile: '팝업/짱구_팝업.png', link: '짱구.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/마스크_확대.png', hoverFile: '팝업/마스크_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '영화 마스크 The Mask, 1994. 소심하고 평범하던 주인공도 마스크를 쓰면 초인적인 힘을 가진 불사신이 된다.' },
      { file: '확대/양웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/안영미입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/동물웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화삐에로_확대.png', hoverFile: '팝업/영화삐에로_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [그것] 속 삐에로 살인마  ' },
      { file: '확대/사이렌_확대.png', hoverFile: '팝업/사이렌_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '온화한 미소의 세이렌(siren)은 사실 아름다운 노랫소리로 선원들을 유혹해 바다에 뛰어들어 죽게 만드는 전설의 동물이다.' },
      { file: '확대/조커_확대.png', hoverFile: '팝업/조커_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '조커병, 감정실금 - 자신의 의지, 현장의 분위기 등과 관계없이 감정을 통제하지 못해 웃음이 나올 상황이 아님에도 박장대소를 하거나, 눈물이 나올 상황이 아님에도 울음이 나고 이를 본인의 의지로 멈추지 못하는 감정 조절 기능 장애다.' },
      { file: '확대/썩소_확대.png', hoverFile: '팝업/썩소_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '아역배우 왕석현은 만 5세이던 2008년, 영화 <과속스캔들>에서 특유의 썩소(썩은 미소) 표정으로 인기를 끌었다.' },
      { file: '확대/영화쏘우_확대.png', hoverFile: '팝업/영화쏘우_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '게임을 시작하지..' },
      { file: '확대/타조_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/킥킥_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/팀쿡_확대.png', hoverFile: '팝업/팀쿡_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: 'Apple 제7대 CEO 팀 쿡 (Tim Cook)의 미소. 어렸을 때부터 현재까지의 웃는 사진은 모두 왼쪽 입꼬리가 오른쪽에 비해 살짝 올라가 있어 전형적인 썩소 느낌이 난다.' },
      { file: '확대/캐릭터웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/미소세상_확대.png', hoverFile: '팝업/미소세상_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/초록머리_확대.png', hoverFile: '팝업/초록머리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유희왕 ARC-V의 등장인물 린의 썩소.' },
      { file: '확대/입꼬리.png', hoverFile: '팝업/입꼬리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '박정민(SS501), 썩소의 창시자이자 선구자로 박썩소라는 별명이 있다.' },
      { file: '확대/눈웃음캐릭터_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/이석훈_확대.png', hoverFile: '팝업/이석훈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '패션쇼에 선 김용준을 보고 웃음 참는 이석훈' },
      { file: '확대/손담비눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/그라라라_확대.png', hoverFile: '팝업/그라라라_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '그라라라' },
      { file: '확대/음흉한웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음사람_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃음가스_확대.png', hoverFile: '팝업/웃음가스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '웃음가스치료' },
      { file: '확대/하회탈_확대.png', hoverFile: '팝업/하회탈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '양반탈은 위로 향하면 웃는 얼굴, 밑을 향하면 성난 얼굴로 표정변화가 일어나도록 인체공학적으로 조각되어 있다. ' },
      { file: '확대/물개웃음눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/스폰지밥_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/돼지_확대.png', hoverFile: '팝업/돼지_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는사람_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/씰룩씰룩_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/얼굴근육_확대.png', hoverFile: '팝업/얼굴근육_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '미국의 심리학자 폴 에크만(Paul Ekman)은 연구를 통해 인간은 얼굴 근육 42개를 조합해 모두 19가지 미소를 만들 수 있지만, 그 중 하나만 진짜 웃음이고 나머지 18개는 모두 가짜 웃음임을 밝혀냈다. ' },
      { file: '확대/혜리교관_확대.png', hoverFile: '팝업/혜리교관_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[진짜사나이] 여군특집에서, 군기를 잡던 터미네이터 분대장이 혜리의 애교에 터져나오는 미소를 참지 못한 사건이다.' },
      { file: '확대/킬킬킬_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/침착맨_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/으흐흐_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/부엉이_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/기침사건_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/오랑우탄_확대.png', hoverFile: '팝업/오랑우탄_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소문만복래(笑門萬福來), 웃는(화목한) 집안에 많은 복이 깃든다.' },
      { file: '확대/해피데스데이_확대.png', hoverFile: '팝업/해피데스데이_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/권오중_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/올드보이_확대.png', hoverFile: '팝업/올드보이_팝업.png', link: '올드보이.html', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는기와_확대.png', hoverFile: '팝업/웃는기와_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '얼굴무늬 수막새. 신라 시대의 기와 유물로, 인상적인 푸근한 미소 덕분에 일명 신라의 미소 혹은 천년의 미소로 신라 또는 경주시를 상징하는 유물로 자리잡았다.' },
      { file: '확대/핑구_확대.png', hoverFile: '팝업/핑구_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '핑구의 웃음소리는 유투버 침착맨의 것과 유사해 [침착맨을 삼킨 동물] 이라는 별명이 있다.' },
      { file: '확대/파리웃참_확대.png', hoverFile: '팝업/파리웃참_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/교관웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/나무늘보_확대.png', hoverFile: '팝업/나무늘보_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '나무늘보는 365일 웃는 얼굴이다.' },
      { file: '확대/샬롯링링_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/가이포크스_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/티모_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/말웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/흐흐흐_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/루피_확대.png', hoverFile: '팝업/루피_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '군침이 싹 도는 잔망루피는 트위터에서 양말의 뒷면으로 유명한 사진을 이용하여 장난식으로 올린 트윗으로 인해 시작되었다.' },
      { file: '확대/손담비입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/낄낄_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
    ];

    const gridContainer = document.querySelector('.image-grid');
    const popupImageContainer = document.getElementById('popupImageContainer');
    const popupImage = document.getElementById('popupImage');
    const popupAudio = document.getElementById('popupAudio');
    const popupText = document.getElementById('popupText');
    const errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    errorMessage.style.position = 'fixed';
    errorMessage.style.bottom = '10px';
    errorMessage.style.left = '10px';
    errorMessage.style.color = 'red';
    errorMessage.style.backgroundColor = 'rgba(255,255,255,0.8)';
    errorMessage.style.padding = '10px';
    errorMessage.style.borderRadius = '5px';
    errorMessage.style.zIndex = '1001';
    errorMessage.style.display = 'none'; // 초기 상태는 숨김
    document.body.appendChild(errorMessage);

    let userInteracted = false; // 사용자 상호작용 여부

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000); // 5초 후 자동 숨김
    }

    function showPopupImage(event) {
        const img = event.target;
        if (!img.dataset.hoverSrc) return; // hoverFile이 빈 문자열이면 실행하지 않음
        const rect = img.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 팝업 이미지를 중앙에 맞추기 위해 위치 조정
        popupImage.src = img.dataset.hoverSrc;
        popupImageContainer.style.left = `${rect.left + scrollLeft + rect.width / 2}px`;
        popupImageContainer.style.top = `${rect.top + scrollTop + rect.height / 2}px`;
        popupImageContainer.style.transform = 'translate(-50%, -50%)'; // 중앙 정렬
        popupImageContainer.style.display = 'block';

        // 오디오 재생
        if (img.dataset.audioSrc && userInteracted) { // 사용자 상호작용 후 재생
            popupAudio.src = img.dataset.audioSrc;
            popupAudio.style.display = 'none'; // 자동 재생을 위해 숨김
            popupAudio.currentTime = 0; // 재생 위치 초기화
            popupAudio.play().catch(err => {
                console.error("Audio play error:", err);
                showError(`오디오 재생 오류: ${err.message}`);
                popupAudio.src = ""; // 오디오 소스를 제거하여 상태 초기화
            }); // 재생 및 에러 처리
        } else {
            popupAudio.pause();
            popupAudio.src = ""; // 오디오 소스를 제거하여 상태 초기화
        }
    }

    function hidePopupImage() {
        popupImageContainer.style.display = 'none';
        popupText.style.display = 'none';
        popupAudio.pause(); // 오디오 중지
        popupAudio.currentTime = 0; // 오디오 재생 위치 초기화
    }

    function handleUserInteraction() {
        userInteracted = true; // 사용자 상호작용이 발생했음을 설정
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
    }

    // 사용자 상호작용 이벤트 추가
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    images.forEach(image => {
        const link = document.createElement('a');
        if (image.link) {
            link.href = image.link;
        }
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = image.file;
        img.dataset.hoverSrc = image.hoverFile;
        if (image.audio) {
            img.dataset.audioSrc = image.audio;
        }

        // 이미지마다 개별 필터 적용
        img.style.filter = `grayscale(${image.grayscale}%) brightness(${image.brightness})`;
        img.style.opacity = image.opacity;
        img.style.border = image.border;
        /*img.style.mixBlendMode = 'multiply'; // 배경색과 혼합*/

        imgContainer.appendChild(img);

        // 오버레이 이미지 추가
        if (image.overlay) {
            const overlayImg = document.createElement('img');
            overlayImg.src = 'diamond_crosshatch_pattern.png';
            overlayImg.classList.add('overlay');
            imgContainer.appendChild(overlayImg);
        }

        link.appendChild(imgContainer);
        gridContainer.appendChild(link);

        // 이벤트 리스너 추가
        link.addEventListener('mouseover', showPopupImage);
        link.addEventListener('mouseout', hidePopupImage);

        if (!image.link) {
            img.addEventListener('click', () => {
                popupText.textContent = image.text;
                popupText.style.display = 'block';
                popupText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // 배경색과 혼합
            });
        }
    });

    // 창 크기 변경 시 열 개수 조절
    window.addEventListener('resize', adjustGridColumns);
    adjustGridColumns();

    function adjustGridColumns() {
        const gridWidth = gridContainer.offsetWidth;
        const columnWidth = 105; // 각 이미지의 너비
        const gap = 10; // 이미지 간 간격
        const maxColumns = 16;
        let columns = Math.min(maxColumns, Math.floor((window.innerWidth * 0.9) / (columnWidth + gap)));
        if (window.innerWidth * 0.9 - (columns * (columnWidth + gap)) < window.innerWidth * 0.05) {
            columns--;
        }
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${columnWidth}px)`;
    }
});
