import mp1 from '../../assets/mp3/mp1.mp3';
import mp2 from '../../assets/mp3/mp2.m4a';
import mp3 from '../../assets/mp3/mp3.mp3';
import mp4 from '../../assets/mp3/mp4.mp3';
import mp5 from '../../assets/mp3/mp5.mp3';
import mp6 from '../../assets/mp3/mp6.mp3';
import mp7 from '../../assets/mp3/mp7.mp3';
import mp8 from '../../assets/mp3/mp8.mp3';
import mp9 from '../../assets/mp3/mp9.mp3';
import mp10 from '../../assets/mp3/mp10.mp3';

import img1 from '../../assets/imgs/img1.jpg';
import img2 from '../../assets/imgs/img2.jpg';
import img3 from '../../assets/imgs/img3.jpg';
import img4 from '../../assets/imgs/img4.jpg';
import img5 from '../../assets/imgs/img5.jpg';
import img6 from '../../assets/imgs/img6.jpg';
import img7 from '../../assets/imgs/img7.jpg';
import img8 from '../../assets/imgs/img8.jpg';
import img9 from '../../assets/imgs/img9.jpg';
import img10 from '../../assets/imgs/img10.jpg';
export default function Data() {
    return [
            {
                musicName: "Anlasana",
                artist: "Amorf",
                urlMusic: mp1,
                urlImg: img1,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Lose Yourself",
                artist: "Eminem",
                urlMusic: mp2,
                urlImg: img2,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Музыкалная Чайхана",
                artist: "Yalla",
                urlMusic: mp3,
                urlImg: img3,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "We Are Heroes",
                artist: "Abu DjundulLah",
                urlMusic: mp4,
                urlImg: img4,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Quyosh porlamoq uchun",
                artist: "Bahtiyor Rahmonov",
                urlMusic: mp5,
                urlImg: img5,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Ollohimga Aytib Ber",
                artist: "Ozodbek Nazarbekov",
                urlMusic: mp6,
                urlImg: img6,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Maktabimda",
                artist: "Xamdam Sobirov",
                urlMusic: mp7,
                urlImg: img7,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Endi seni yor demoqqa yor yor",
                artist: "Sardor Toirov",
                urlMusic: mp8,
                urlImg: img8,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Bo\'larkan",
                artist: "Doston Ergashev",
                urlMusic: mp9,
                urlImg: img9,
                id: (Math.random() + "sds" + Math.random())
            },
            {
                musicName: "Bo\'larim Bo\'ldi",
                artist: "Farrux Xamrayev",
                urlMusic: mp10,
                urlImg: img10,
                id: (Math.random() + "sds" + Math.random())
            }
        ];
}
