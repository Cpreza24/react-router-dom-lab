import { Link } from 'react-router';
import './MailboxList.css';

function MailboxList({ mail }) {
  return (
    <div>
      <h1>MailBox List</h1>
      <div className='box-container'>
        {mail.map((item, index) => (
          <div className='mailbox-items' key={index}>
            <h2>
              <Link className='box-link' to={`/mailboxes/${item.id}`}>
                {item.name} {item.id}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
