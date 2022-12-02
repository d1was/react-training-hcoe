import { useState } from "react";
import EmojiList from "./EmojiList";
import filterEmoji from "./filterEmoji";
import Header from "./Header";
import SearchInput from "./SearchInput";

export default function App() {
  const initialEmojis = filterEmoji("", 20);
  const [filteredEmojis, setFilteredEmojis] = useState(initialEmojis);
  return (
    <>
      <Header />
      <SearchInput setEmoji={setFilteredEmojis} />
      <EmojiList data={filteredEmojis} />
    </>
  )
}