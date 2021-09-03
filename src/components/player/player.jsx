import React, { Component } from 'react'

export default class Player extends Component {

    render() {
        const href = "https://www.youtube.com/watch?v=";
        const videos = [
            {
              thumbnail_url: 'https://i.ytimg.com/vi/xnI1QBVKJEI/default.jpg',
              title: '삼겹살에 치즈김치볶음밥 처음 먹어본 영국 고등학생들의 반응!?',
              channel: '영국남자 Korean Englishman',
              id: 'xnI1QBVKJEI',
              description:
                '오늘은 영국 고등학생들에게 삼겹살 바베큐 풀코스를 소개 했습니다! 작년에 저희가 직접 만든 고기불판 테이블에 먹었는데, 베이컨만 알고 살아온 영국친구들에게 고기 다 굽고 먹는 김치볶음밥이 통할까요? 영상의 모든 출연진을 포함한 스태프 전원은 촬영 이전 코로나19 음성 확진을 받았습니다. 모든 촬영 과정은 정부의 방역 지침에 따라 전문가의 확인을 받아 진행되었습니다. Today we take British high school students on a full course Korean Pork Belly BBQ experience. Starting from the meat, then the Ssam, and finishing with a classic Kimchi fried rice! Everyone in this video including the crew had a negative COVID-19 test prior to shooting! All activities were fully risk assessed and monitored in accordance with UK government guidelines.',
            },
            {
              thumbnail_url: 'https://i.ytimg.com/vi/uvAvQvPJ_H4/default.jpg',
              title: '근데노인정',
              channel: '런닝맨 - 스브스 공식 채널',
              id: 'uvAvQvPJ_H4',
              description:
                '인정해야 이긴다 .zip 《런닝맨 / 예능맛ZIP / RunningMan 》 흠씬 두들겨 맞아도 사그라들지 않는 저격 본능 E. 568 #예능맛ZIP​ #런닝맨​ #Runningman',
            },
            {
              thumbnail_url: 'https://i.ytimg.com/vi/BjmmvBMXbSU/default.jpg',
              title: "fromis_9 (프로미스나인) 'Talk & Talk' Official MV",
              channel: 'HYBE LABELS',
              id: 'BjmmvBMXbSU',
              description:
                "fromis_9 (프로미스나인) 'Talk & Talk' Official MV 지난 5월 두 번째 싱글 앨범 [9 WAY TICKET]으로 전 세계 팬들에게 특별한 여행의 추억을 선물하며 ‘리프레시 메이트’가 되어 준 프로미스나인이 ‘톡톡’ 튀는 청량 에너지를 가득 담은 신보로 여름에 이어 가을까지 완벽 접수한다. 타이틀곡 ‘Talk & Talk’은 새로운 만남이 시작되는 시점의 두근거림을 경험해본 사람이라면 누구나 쉽게 공감할 수 있는 감정을 섬세하게 담아낸 곡으로 밤새도록 전화 통화를 이어가고 싶은 풋풋한 설렘을 ‘아무 말 파티’, ‘끝말잇기’에 비유해 재치 있게 풀어냈다.",
            },
            {
              thumbnail_url: 'https://i.ytimg.com/vi/GSUTDopLncM/default.jpg',
              title:
                '이라크전 공식 훈련 15분 풀공개 #무편집 #완전체훈련 | 월드컵 최종예선 EP.3',
              channel: 'KFATV_한국 축구 국가대표팀',
              id: 'GSUTDopLncM',
            },
            {
              thumbnail_url: 'https://i.ytimg.com/vi/AqrGqUAxwsE/default.jpg',
              title:
                '우리는 탭을 치지 않는다, 기절할 뿐. (침착맨X주호민X기안84 feat.김동현) | 말년을 건강하게 EP.15',
              channel: 'M드로메다 스튜디오',
              id: 'AqrGqUAxwsE',
              
            },
          ];

        // var tag = document.createElement('script'); 
        // tag.src = "https://www.youtube.com/iframe_api"; 
        // var firstScriptTag = document.getElementsByTagName('script')[0]; 
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); var youtubePlayer; 
        
        // function onYouTubeIframeAPIReady() { 
        //     youtubePlayer = new YT.Player('player', { 
        //         width: '640', 
        //         height: '360', 
        //         videoId: 'x993sfGToV0', 
        //         playerVars:{ 
        //             rel:0 //관련영상 표시하지 않기. 
        //         }, 
        //         events: { 
        //             'onReady': onPlayerReady, //로딩할때 이벤트 실행 
        //             'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행 
        //         } 
        //     }); 
        // } 
        
        // function onPlayerReady(event) { 
        //     event.target.playVideo();//자동재생 
        // } 
        
        // var done = false; 
        // function onPlayerStateChange(event) { 
        //     if (event.data === YT.PlayerState.PLAYING && !done) { 
        //         // setTimeout(stopVideo, 6000); 
        //         done = true; 
        //     } 
        // } 
        
        // function stopVideo() { 
        //     youtubePlayer.stopVideo(); 
        // } 
        
        // function playVideo() { 
        //     youtubePlayer.playVideo();//재생 
        // }

        

        return (
            
            <div>
                <div className="now-playing">
                <iframe width="560" height="315" src={href+videos[0].id} title={videos[0].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h2>{videos[0].title}</h2>
                    <span>{videos[0].channel}</span>
                    <p>{videos[0].description}</p>
                </div>
                <div className="realted-list">

                </div>
            </div>
        )
    }
}
