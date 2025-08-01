import Aside from "../pure/Aside";
import ChatMain from "../pure/ChatMain";
import Footer from "../pure/Footer";
import Header from "../pure/Header";
import "../../styles/chat.styles.css";

const Chat = () => {
  return (
    <main className="chat">
      <div className="chat__body">
        <Aside />
        <div className="chat__content">
          <Header />
          <ChatMain />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chat;
