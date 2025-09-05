import { Link } from "react-router-dom";

const Layout = ({ children, cartState }) => {
    const totalItems = cartState.getTotalItems();

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            쇼핑몰
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Link to="/cart" className="relative">
                                <div className="bg-blue-500 text-white p-2 rounded-full">🛒</div>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
