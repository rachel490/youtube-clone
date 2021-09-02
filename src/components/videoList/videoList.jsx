import React, { Component } from 'react';
import './videoList.css';

export default class VideoList extends Component {

    render() {

        const API_KEY = "AIzaSyANisTUQjLFLaB1DI-jHriie0Bpy6ZXo58";
        const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&regionCode=kr&key=${API_KEY}`;
        let videoList = []
        fetch(URL)
        .then(response => response.json())
        .then(data => data.items.map(item => {
            console.log(item);
            const video = {
                thumbnail_url : item.snippet.thumbnails.high.url,
                title : item.snippet.title,
                channel : item.snippet.channelTitle,
                id : item.id
            }
            videoList.push(video)
        }))
       
        const videos = [
            {
                thumbnail_url: "https://i.ytimg.com/vi/xnI1QBVKJEI/default.jpg", 
                title: "삼겹살에 치즈김치볶음밥 처음 먹어본 영국 고등학생들의 반응!?", 
                channel: "영국남자 Korean Englishman", 
                id: "xnI1QBVKJEI"
            },
            {
                thumbnail_url: "https://i.ytimg.com/vi/uvAvQvPJ_H4/default.jpg", 
                title: "근데노인정", 
                channel: "런닝맨 - 스브스 공식 채널", 
                id: "uvAvQvPJ_H4"
            },{
                thumbnail_url: "https://i.ytimg.com/vi/BjmmvBMXbSU/default.jpg", 
                title: "fromis_9 (프로미스나인) 'Talk & Talk' Official MV", 
                channel: "HYBE LABELS",
                id: "BjmmvBMXbSU"
            },{
                thumbnail_url: "https://i.ytimg.com/vi/GSUTDopLncM/default.jpg", 
                title: "이라크전 공식 훈련 15분 풀공개 #무편집 #완전체훈련 | 월드컵 최종예선 EP.3", 
                channel: "KFATV_한국 축구 국가대표팀", 
                id: "GSUTDopLncM"
            },{
                thumbnail_url: "https://i.ytimg.com/vi/AqrGqUAxwsE/default.jpg", 
                title: "우리는 탭을 치지 않는다, 기절할 뿐. (침착맨X주호민X기안84 feat.김동현) | 말년을 건강하게 EP.15", 
                channel: "M드로메다 스튜디오", 
                id: "AqrGqUAxwsE"
            }

        ]
        
        
        return (
            <ul className="videoList">
                {
                    videos.map(video => {
                        const href=`https://www.youtube.com/watch?v=${video.id}`;
                        return (
                            <li className="videos">
                                <a className="video-link" href={href}><img className="video-image" src={video.thumbnail_url} alt="thumbnail" /></a>
                                <div className="video-text">
                                    <span className="video-text_title">{video.title}</span>
                                    <span className="video-text_channel">{video.channel}</span>
                                </div>
                            </li>
                        )})
                }
            </ul>
        )
    }
}
