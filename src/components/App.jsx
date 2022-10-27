import PhoneBook from './PhoneBook/PhoneBook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        padding: '15px 0',
        color: '#010101',
      }}
    >
      <PhoneBook />
    </div>
  );
};
