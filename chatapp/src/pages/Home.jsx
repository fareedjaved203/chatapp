import { useState } from "react";
import Title from "../components/shared/Title";
import ChatList from "../components/specific/ChatList";
import { sampleChats } from "../components/constants/sampleData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Title />
      <div className="h-screen w-full">
        {/* Header */}
        <div className="w-full bg-blue-500 p-4 text-white flex justify-between items-center">
          <h1>Header</h1>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bg-blue-500 w-full p-4 text-white lg:hidden z-1">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
        )}

        {/* Columns */}
        <div className="flex h-full">
          <div className="flex-1 bg-red-500">
            <ChatList
              chats={sampleChats}
              chatId={"1"}
              newMessagesAlert={[
                {
                  chatId: "1",
                  count: 4,
                },
              ]}
              onlineUsers={["1", "2"]}
            />
          </div>
          <div className="flex-1 bg-green-500">
            <p>Column 2</p>
          </div>
          <div className="flex-1 bg-yellow-500">
            <p>Column 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
