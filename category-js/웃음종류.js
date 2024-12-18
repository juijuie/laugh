document.addEventListener("DOMContentLoaded", () => {
    const images = [
      { file: '확대/이석훈_확대.png', hoverFile: '팝업/이석훈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '패션쇼에 선 김용준을 보고 웃음 참는 이석훈' },
      { file: '확대/박민영_확대.png', hoverFile: '팝업/박민영_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: 'ㅎ훕..' },
      { file: '확대/눈웃음사람_확대.png', hoverFile: '팝업/눈웃음사람_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양' },
      { file: '확대/박뿜계_확대.png', hoverFile: '', link: '박뿜계.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/마스크_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/균하하하_확대.png', hoverFile: '팝업/균하하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유튜브 댓글에선 가끔씩 근하하하를 써 억지웃음을 표현하기도 한다.' },
      { file: '확대/영화스마일_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/토마스_확대.png', hoverFile: '팝업/토마스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/맘마맘마_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/욕망의항아리입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/기침사건_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/세균맨입_확대.png', hoverFile: '팝업/세균맨입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '하히후헤호~!' },
      { file: '확대/어노잉_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/샬롯링링_확대.png', hoverFile: '팝업/샬롯링링_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '맘~마 맘마~! 마마마마!' },
      { file: '확대/웃참_확대.png', hoverFile: '팝업/웃참_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '크흡..' },
      { file: '확대/말웃음_확대.png', hoverFile: '팝업/말웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: ' 봉복절도(捧腹絶倒), 하도 우스워 배를 잡고 넘어질 정도로 자지러질 듯 웃는 웃음' },
      { file: '확대/낄낄_확대.png', hoverFile: '팝업/낄낄_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '낄낄낄' },
      { file: '확대/스폰지밥_확대.png', hoverFile: '팝업/스폰지밥_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '따하하하하하하' },
      { file: '확대/우하하_확대.png', hoverFile: '팝업/우하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '너털웃음, 큰 소리로 호기스럽게 웃는 웃음.' },
      { file: '확대/손담비입_확대.png', hoverFile: '팝업/손담비입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '모소(侮笑), 남을 업신여겨 비웃음. ' },
      { file: '확대/하회탈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음입_확대.png', hoverFile: '팝업/물개웃음입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '일소일소(一笑一少), 한 번 웃으면 한 번 젊어진다는 뜻이다.' },
      { file: '확대/웃는사람_확대.png', hoverFile: '팝업/웃는사람_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '비소' },
      { file: '확대/눈웃음캐릭터_확대.png', hoverFile: '팝업/눈웃음캐릭터_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '교소(巧笑) 귀염성 있게 아양을 떠는 웃음. ' },
      { file: '확대/홍진호_확대.png', hoverFile: '팝업/홍진호_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '건소(乾笑), 건성으로 웃는 억지 웃음.' },
      { file: '확대/안영미입_확대.png', hoverFile: '팝업/안영미입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '싸악' },
      { file: '확대/욕망의항아리눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화삐에로_확대.png', hoverFile: '팝업/영화삐에로_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [그것] 속 삐에로 살인마  ' },
      { file: '확대/권오중_확대.png', hoverFile: '팝업/권오중_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '음흉한 웃음' },
      { file: '확대/세균맨눈_확대.png', hoverFile: '팝업/세균맨눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '하히후헤호~!' },
      { file: '확대/킥킥_확대.png', hoverFile: '팝업/킥킥_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '킥...ㅋㅣ킥....킼......' },
      { file: '확대/하츠네입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/지성_확대.png', hoverFile: '팝업/지성_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '풉...' },
      { file: '확대/썩소_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/흐흐흐_확대.png', hoverFile: '팝업/흐흐흐_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '희소(嬉笑), 실없이 웃는 웃음.' },
      { file: '확대/씰룩씰룩_확대.png', hoverFile: '팝업/씰룩씰룩_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '씰룩~ 씰룩~' },
      { file: '확대/킬킬킬_확대.png', hoverFile: '팝업/킬킬킬_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '킬킬킬' },
      { file: '확대/음흉한웃음_확대.png', hoverFile: '팝업/음흉한웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/가이포크스_확대.png', hoverFile: '팝업/가이포크스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '가이포크스[ Guy Fawkes ], 저항과 혁명의 아이콘이 된 국왕 암살 모의자. 그의 이름인 가이는 그 녀석 또는 그 사람을 뜻하는 영단어 Guy 의 근원이 되었다.' },
      { file: '확대/눈웃음_확대.png', hoverFile: '팝업/눈웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '싱긋' },
      { file: '확대/웃음가스_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/그라라라_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/초록머리_확대.png', hoverFile: '팝업/초록머리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유희왕 ARC-V의 등장인물 린의 썩소.' },
      { file: '확대/핑구_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/올드보이_확대.png', hoverFile: '', link: '올드보이.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/부엉이_확대.png', hoverFile: '팝업/부엉이_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양' },
      { file: '확대/미소지기_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음눈_확대.png', hoverFile: '팝업/물개웃음눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '가가대소(呵呵大笑), 껄껄거리며 한바탕 크게 웃는 모양' },
      { file: '확대/씨익_확대.png', hoverFile: '팝업/씨익_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '씨익' },
      { file: '확대/유병재_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/파리웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는개_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/손담비눈_확대.png', hoverFile: '팝업/손담비눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '해소(咍笑), 비웃음' },
      { file: '확대/푸흡눈_확대.png', hoverFile: '팝업/푸흡눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '푸흡..' },
      { file: '확대/푸흡입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하츠네눈_확대.png', hoverFile: '팝업/하츠네눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/티모_확대.png', hoverFile: '팝업/티모_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '흐흐흐하항 흐하하항 하하하' },
      { file: '확대/루피_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/팬암뒤센_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/뒤센팬암_확대.png', hoverFile: '팝업/뒤센팬암_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/입꼬리.png', hoverFile: '팝업/입꼬리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '박정민(SS501), 썩소의 창시자이자 선구자로 박썩소라는 별명이 있다.' },
      { file: '확대/타조_확대.png', hoverFile: '팝업/타조_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '개구소(開口笑), 입을 벌려 웃음' },
      { file: '확대/사이렌_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/캐릭터웃음_확대.png', hoverFile: '팝업/캐릭터웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '자신만만한 웃음' },
      { file: '확대/오랑우탄_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/중국웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/얼굴근육_확대.png', hoverFile: '팝업/얼굴근육_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '미국의 심리학자 폴 에크만(Paul Ekman)은 연구를 통해 인간은 얼굴 근육 42개를 조합해 모두 19가지 미소를 만들 수 있지만, 그 중 하나만 진짜 웃음이고 나머지 18개는 모두 가짜 웃음임을 밝혀냈다. ' },
      { file: '확대/미소세상_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/양웃음_확대.png', hoverFile: '팝업/양웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양.' },
      { file: '확대/안영미눈_확대.png', hoverFile: '팝업/안영미눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '음흉한 웃음' },
      { file: '확대/동물웃음_확대.png', hoverFile: '팝업/동물웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '굉소(轟笑), 큰소리를 내어 웃음. ' },
      { file: '확대/나무늘보_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/짱구_확대.png', hoverFile: '', link: '짱구.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/돼지_확대.png', hoverFile: '팝업/돼지_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는기와_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/으흐흐_확대.png', hoverFile: '팝업/으흐흐_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '신소(矧笑), 잇몸까지 드러내어 크게 웃음.' },
      { file: '확대/조커_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/혜리교관_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화쏘우_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/깔깔_확대.png', hoverFile: '팝업/깔깔_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '깔깔깔' },
      { file: '확대/침착맨_확대.png', hoverFile: '팝업/침착맨_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '오홍홍' },
      { file: '확대/팀쿡_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/해피데스데이_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/교관웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/박뿜계_확대.png', hoverFile: '', link: '박뿜계.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음_확대.png', hoverFile: '팝업/눈웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '싱긋' },
      { file: '확대/깔깔_확대.png', hoverFile: '팝업/깔깔_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '깔깔깔' },
      { file: '확대/욕망의항아리눈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃참_확대.png', hoverFile: '팝업/웃참_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '크흡..' },
      { file: '확대/씨익_확대.png', hoverFile: '팝업/씨익_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '씨익' },
      { file: '확대/중국웃음_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/유병재_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/맘마맘마_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/지성_확대.png', hoverFile: '팝업/지성_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '풉...' },
      { file: '확대/우하하_확대.png', hoverFile: '팝업/우하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '너털웃음, 큰 소리로 호기스럽게 웃는 웃음.' },
      { file: '확대/하츠네입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/욕망의항아리입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/안영미눈_확대.png', hoverFile: '팝업/안영미눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '음흉한 웃음' },
      { file: '확대/균하하하_확대.png', hoverFile: '팝업/균하하하_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유튜브 댓글에선 가끔씩 근하하하를 써 억지웃음을 표현하기도 한다.' },
      { file: '확대/푸흡입_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/어노잉_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/푸흡눈_확대.png', hoverFile: '팝업/푸흡눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '푸흡..' },
      { file: '확대/세균맨눈_확대.png', hoverFile: '팝업/세균맨눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '하히후헤호~!' },
      { file: '확대/박민영_확대.png', hoverFile: '팝업/박민영_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: 'ㅎ훕..' },
      { file: '확대/하츠네눈_확대.png', hoverFile: '팝업/하츠네눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '[억지웃음(アイソワライ)]은 하츠네 미쿠의 VOCALOID 오리지널 곡명이다.' },
      { file: '확대/뒤센팬암_확대.png', hoverFile: '팝업/뒤센팬암_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/홍진호_확대.png', hoverFile: '팝업/홍진호_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '건소(乾笑), 건성으로 웃는 억지 웃음.' },
      { file: '확대/토마스_확대.png', hoverFile: '팝업/토마스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '소중유도(笑中有刀), 웃음 속에 칼이 있다. 좋은체 하나 속으로는 도리어 해치려는 마음을 품고 있다는 뜻이다.' },
      { file: '확대/미소지기_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/팬암뒤센_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화스마일_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/세균맨입_확대.png', hoverFile: '팝업/세균맨입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '하히후헤호~!' },
      { file: '확대/웃는개_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/짱구_확대.png', hoverFile: '', link: '짱구.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/마스크_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/양웃음_확대.png', hoverFile: '팝업/양웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양.' },
      { file: '확대/안영미입_확대.png', hoverFile: '팝업/안영미입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '싸악' },
      { file: '확대/동물웃음_확대.png', hoverFile: '팝업/동물웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '굉소(轟笑), 큰소리를 내어 웃음. ' },
      { file: '확대/영화삐에로_확대.png', hoverFile: '팝업/영화삐에로_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '공포영화 [그것] 속 삐에로 살인마  ' },
      { file: '확대/사이렌_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/조커_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/썩소_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/영화쏘우_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/타조_확대.png', hoverFile: '팝업/타조_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '개구소(開口笑), 입을 벌려 웃음' },
      { file: '확대/킥킥_확대.png', hoverFile: '팝업/킥킥_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '킥...ㅋㅣ킥....킼......' },
      { file: '확대/팀쿡_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/캐릭터웃음_확대.png', hoverFile: '팝업/캐릭터웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '자신만만한 웃음' },
      { file: '확대/미소세상_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/초록머리_확대.png', hoverFile: '팝업/초록머리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '유희왕 ARC-V의 등장인물 린의 썩소.' },
      { file: '확대/입꼬리.png', hoverFile: '팝업/입꼬리_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '박정민(SS501), 썩소의 창시자이자 선구자로 박썩소라는 별명이 있다.' },
      { file: '확대/눈웃음캐릭터_확대.png', hoverFile: '팝업/눈웃음캐릭터_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '교소(巧笑) 귀염성 있게 아양을 떠는 웃음. ' },
      { file: '확대/이석훈_확대.png', hoverFile: '팝업/이석훈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '패션쇼에 선 김용준을 보고 웃음 참는 이석훈' },
      { file: '확대/손담비눈_확대.png', hoverFile: '팝업/손담비눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '해소(咍笑), 비웃음' },
      { file: '확대/그라라라_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/음흉한웃음_확대.png', hoverFile: '팝업/음흉한웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/눈웃음사람_확대.png', hoverFile: '팝업/눈웃음사람_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양' },
      { file: '확대/웃음가스_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/하회탈_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음눈_확대.png', hoverFile: '팝업/물개웃음눈_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '가가대소(呵呵大笑), 껄껄거리며 한바탕 크게 웃는 모양' },
      { file: '확대/스폰지밥_확대.png', hoverFile: '팝업/스폰지밥_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '따하하하하하하' },
      { file: '확대/돼지_확대.png', hoverFile: '팝업/돼지_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는사람_확대.png', hoverFile: '팝업/웃는사람_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '비소' },
      { file: '확대/씰룩씰룩_확대.png', hoverFile: '팝업/씰룩씰룩_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '씰룩~ 씰룩~' },
      { file: '확대/얼굴근육_확대.png', hoverFile: '팝업/얼굴근육_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '미국의 심리학자 폴 에크만(Paul Ekman)은 연구를 통해 인간은 얼굴 근육 42개를 조합해 모두 19가지 미소를 만들 수 있지만, 그 중 하나만 진짜 웃음이고 나머지 18개는 모두 가짜 웃음임을 밝혀냈다. ' },
      { file: '확대/혜리교관_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/킬킬킬_확대.png', hoverFile: '팝업/킬킬킬_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '킬킬킬' },
      { file: '확대/침착맨_확대.png', hoverFile: '팝업/침착맨_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '오홍홍' },
      { file: '확대/으흐흐_확대.png', hoverFile: '팝업/으흐흐_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '신소(矧笑), 잇몸까지 드러내어 크게 웃음.' },
      { file: '확대/부엉이_확대.png', hoverFile: '팝업/부엉이_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '파안대소(破顔大笑), 즐거운 표정으로 빙그레 웃는 모양' },
      { file: '확대/기침사건_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/오랑우탄_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/해피데스데이_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/권오중_확대.png', hoverFile: '팝업/권오중_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '음흉한 웃음' },
      { file: '확대/올드보이_확대.png', hoverFile: '', link: '올드보이.html', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/웃는기와_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/핑구_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/파리웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/교관웃참_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/물개웃음입_확대.png', hoverFile: '팝업/물개웃음입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '일소일소(一笑一少), 한 번 웃으면 한 번 젊어진다는 뜻이다.' },
      { file: '확대/나무늘보_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/샬롯링링_확대.png', hoverFile: '팝업/샬롯링링_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '맘~마 맘마~! 마마마마!' },
      { file: '확대/가이포크스_확대.png', hoverFile: '팝업/가이포크스_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '가이포크스[ Guy Fawkes ], 저항과 혁명의 아이콘이 된 국왕 암살 모의자. 그의 이름인 가이는 그 녀석 또는 그 사람을 뜻하는 영단어 Guy 의 근원이 되었다.' },
      { file: '확대/티모_확대.png', hoverFile: '팝업/티모_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '흐흐흐하항 흐하하항 하하하' },
      { file: '확대/말웃음_확대.png', hoverFile: '팝업/말웃음_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: ' 봉복절도(捧腹絶倒), 하도 우스워 배를 잡고 넘어질 정도로 자지러질 듯 웃는 웃음' },
      { file: '확대/흐흐흐_확대.png', hoverFile: '팝업/흐흐흐_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '희소(嬉笑), 실없이 웃는 웃음.' },
      { file: '확대/루피_확대.png', hoverFile: '', link: '', audio: 'mp3/', grayscale: 100, opacity: 0.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '' },
      { file: '확대/손담비입_확대.png', hoverFile: '팝업/손담비입_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '모소(侮笑), 남을 업신여겨 비웃음. ' },
      { file: '확대/낄낄_확대.png', hoverFile: '팝업/낄낄_팝업.png', link: '', audio: 'mp3/', grayscale: 100, opacity: 1.0, border: '0px solid black', brightness: 1.0, overlay: false, text: '낄낄낄' },
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
