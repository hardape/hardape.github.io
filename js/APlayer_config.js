const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
        name: '横竖撇点折(泠鸢翻唱）（Cover：米白）',
        artist: '泠鸢yousa',
        lrc: '/music/lrc/横竖撇点折(泠鸢翻唱）（Cover：米白）-泠鸢yousa.lrc',
        cover: 'http://p1.music.126.net/hauPmnxKqlnkASFvDqitEw==/109951164643900131.jpg?param=300x300',
        url: 'http://m10.music.126.net/20200319172506/ba450f047319bc087a34f1a169262614/ymusic/545f/0f08/0259/c5de9c2f728b2ff3e83a534aad01239e.mp3'
    },
    
    ]
});