import { Outlet, Link } from 'react-router-dom'

const Layout = function () {
    return (
        <div className='flex flex-row space-x-4'>
            <div className='sidebar top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center'>
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rickandmorty">Rick & Morty</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div >
                <Outlet/>
            </div>
                    

        </div>

    )
}

export default Layout;