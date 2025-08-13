import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/admin/Home';
import NotFound from './pages/admin__notfound/NotFound';
import Settings from './pages/admin__settings/Settings';
import UserDetail from './pages/admin__users/UserDetail';
import Users from './pages/admin__users/Users';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 모든 admin경로에서 보이게 하기 위해 자식구조로 감싸고, Layout에서 Outlet으로 사용해주기 */}
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
