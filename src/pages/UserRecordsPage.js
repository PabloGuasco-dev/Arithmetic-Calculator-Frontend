import React from 'react';
import UserRecords from '../components/UserRecords';

const UserRecordsPage = ({ token }) => {
  return (
    <div>
      <UserRecords token={token} />
    </div>
  );
}

export default UserRecordsPage;
