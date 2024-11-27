export const getGenreTranslation = (genre) => {
    const dictionary = {
        "Now showing": "Đang chiếu",
        "Action": "Hành động",
        "Comedy": "Hài kịch",
        "Drama": "Chính kịch",
        "Horror": "Kinh dị",
        "Romantic": "Lãng mạn",
        "Sci-Fi": "Viễn tưởng",
        "Fantasy": "Kỳ ảo",
        "Animation": "Hoạt hình",
        "Adventure": "Phiêu lưu",
        "Thriller": "Giật gân",
        "Mystery": "Bí ẩn",
        "Documentary": "Tài liệu",
        "Biography": "Tiểu sử",
        "Music": "Âm nhạc",
        "Crime": "Tội phạm",
        "Family": "Gia đình"
    };

    for (const [english, vietnamese] of Object.entries(dictionary)) {
        if (genre === english) return vietnamese;
        if (genre === vietnamese) return english;
    }

    return genre;
};
