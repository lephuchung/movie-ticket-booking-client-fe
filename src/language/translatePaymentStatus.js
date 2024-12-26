export const getPaymentStatusTranslation = (paymentStatus) => {
    const dictionary = {
        "paid": "Đã thanh toán",
        "pending": "Chờ thanh toán",
        "cancel": "Hủy thanh toán",
    };

    for (const [english, vietnamese] of Object.entries(dictionary)) {
        if (paymentStatus === english) return vietnamese;
        if (paymentStatus === vietnamese) return english;
    }

    return paymentStatus;
};
