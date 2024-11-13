import EventForm from '../home/EventForm';

export default function MainPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      <EventForm />
    </div>
  );
}
