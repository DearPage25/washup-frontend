import './Nav.component.scss'

export const Nav = () => {
    return (
        <>
            <nav className='navbar'>
                <div>
                    <input type="search" placeholder='SEARCH ...'/>
                </div>

                <ul>
                    <li>
                        <span>Notifying</span>
                    </li>
                    <li>
                        <span>User Avatar</span>
                    </li>
                    <li>
                        <span>User Name</span>
                    </li>
                    <li>
                        <span>Chevron down</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}