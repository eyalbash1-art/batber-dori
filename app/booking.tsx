export default function BookingScreen() {
  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      minHeight: '100vh', 
      padding: '24px',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ color: '#d4af37', marginBottom: '16px' }}>הזמנת תור</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
        בחר תאריך ושעה. נשלחת הודעה ל-WhatsApp לאישור אצל הברבר.
      </p>
      
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px' }}>תאריך</h3>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px' }}>
          {['היום', 'מחר', 'שבת', 'ראשון', 'שני', 'שלישי', 'רביעי'].map((day, i) => (
            <button key={i} style={{
              padding: '12px 16px',
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              color: '#cbd5e1',
              minWidth: '100px',
              cursor: 'pointer'
            }}>{day}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px' }}>שעה</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '12px' }}>
          {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', 
            '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'].map((time) => (
            <button key={time} style={{
              padding: '12px',
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              color: '#cbd5e1',
              cursor: 'pointer'
            }}>{time}</button>
          ))}
        </div>
      </div>

      <a 
        href="https://wa.me/972505812495?text=שלום! אני רוצה להזמין תור"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          padding: '16px',
          backgroundColor: '#d4af37',
          color: '#0f172a',
          textAlign: 'center',
          borderRadius: '16px',
          fontWeight: 'bold',
          fontSize: '18px',
          textDecoration: 'none'
        }}
      >
        שליחת בקשת תור ב-WhatsApp
      </a>
    </div>
  );
}
