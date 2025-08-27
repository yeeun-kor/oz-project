import { memo, useCallback, useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  //useMemo로 정적인 배열값 메모제이션 (저장) -> 의존성 빈배열
  const items = useMemo(() => {
    return ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  }, []);

  //필터링된 값들 메모제이션 (저장) -> 아이템과 searchTerm 계속 바뀌니깐 의존성 배열에 넣어야함.
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  //선택한 item이 변하지 않으면, 변하지 않겠다, 빈배열로 두기
  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <ul className="item-list">
          {filteredItems.map((item) => (
            <ListItem key={item} item={item} onClick={handleItemClick} />
          ))}
        </ul>
        {selectedItem && (
          <p className="selected-item">Selected Item: {selectedItem}</p>
        )}
      </div>
    </div>
  );
};
// 리스트 항목 컴포넌트
// eslint-disable-next-line react/display-name, react/prop-types
const ListItem = memo(({ item, onClick }) => {
  console.log(`Rendering ${item}`);
  return <li onClick={() => onClick(item)}>{item}</li>;
});

export default App;
