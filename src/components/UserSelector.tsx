import React, { useState } from 'react';
import cn from 'classnames';
import { User } from '../types/User';
import { Post } from '../types/Post';

type Props = {
  users: User[],
  selectedUser: User | null,
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>,
  setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>,
};

export const UserSelector: React.FC<Props> = React.memo(({
  users,
  selectedUser,
  setSelectedUser,
  setSelectedPost,
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleUserChange = (user: User) => {
    setSelectedUser(user);
    setIsDropdownActive(false);
    setSelectedPost(null);
  };

  return (
    <div
      data-cy="UserSelector"
      className={cn('dropdown', {
        'is-active': isDropdownActive,
      })}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsDropdownActive(true)}
        >
          {selectedUser
            ? selectedUser.name
            : <span>Choose a user</span> }

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => (
            <a
              key={user.id}
              href={`#user-${user.id}`}
              className={cn('dropdown-item', {
                'is-active': selectedUser?.id === user.id,
              })}
              onClick={() => handleUserChange(user)}
            >
              {user.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});
