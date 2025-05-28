import { useState } from "react";

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white rounded-2xl flex flex-col md:flex-row gap-6 p-6 border-b border-red-500">
            <div className="md:w-1/4">
                <h3 className="font-semibold text-[18px] sm:text-[28px] text-gray-800">{review.name}</h3>
                <span className="text-sm sm:text-[17px] text-gray-500">{review.date}</span>
                <div className="flex text-yellow-500 text-[18px] my-2">
                    {"★".repeat(review.stars)}
                </div>
                <p className="text-sm md:text-[16px] text-gray-600">
                    <span className="font-medium text-gray-700">Shifokor: </span>
                    <span className="text-blue-600">{review.doctor}</span>
                </p>
            </div>
            <p className="md:w-3/4 text-gray-700 text-sm sm:text-[18px] mt-2 whitespace-pre-line">
                {review.text}
            </p>
        </div>
    );
};

const AllReviews = ({ reviews }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const currentReviews = reviews.slice(
        (currentPage - 1) * reviewsPerPage,
        currentPage * reviewsPerPage
    );

    return (
        <section id="all-reviews" className="py-10 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6">
                    {currentReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        className="px-3 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-600 hover:text-white disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                    >
                        Назад
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 rounded-full ${currentPage === i + 1
                                    ? "bg-red-500 text-white"
                                    : "text-red-500 border border-red-500 hover:bg-red-600 hover:text-white"
                                }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="px-3 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-600 hover:text-white disabled:opacity-50"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Вперёд
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AllReviews;
