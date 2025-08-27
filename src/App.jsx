import { memo, useCallback, useMemo, useState } from "react";
import "./App.css";

// 리스트 항목 컴포넌트
const ListItem = memo(({ item, onClick }) => {
  console.log(`Rendering ${item}`);
  return <li onClick={() => onClick(item)}>{item}</li>;
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  //items 배열을 useMemo를 사용하여 메모이제이션 (데이터 저장, 의존성배열 빈배열 , 초기 생성시만 생성)
  const items = useMemo(() => {
    return ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  }, []);

  //3. `useMemo`를 사용하여 메모이제이션
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  //handleItemClick 함수를 useCallback으로 메모이제이션
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

export default App;
