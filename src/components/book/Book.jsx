import Image from "next/image";

const Book = ({ book, index, onClick }) => {
  return (
    <div
      key={index}
      className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center"
      onClick={onClick}
    >
      <img src={book.image} alt="Book" className="p-1" />
    </div>
  );
};

export default Book;
