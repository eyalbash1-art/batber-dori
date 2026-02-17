export default function PricesScreen() {
  const services = [
    { id: "1", name: "טייפר", price: "40 ₪", description: "תספורת טייפר מקצועית" },
    { id: "2", name: "לואו קאט", price: "40 ₪", description: "תספורת לואו קאט" },
    { id: "3", name: "זקן", price: "25 ₪", description: "עיצוב וגילוח זקן" },
    { id: "4", name: "תספורת ילד", price: "30 ₪", description: "תספורת לילדים" },
    { id: "5", name: "תספורת מבוגר + זקן", price: "60 ₪", description: "חבילה משתלמת" }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      minHeight: '100vh', 
      padding: '24px',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ color: '#d4af37', marginBottom: '16px' }}>מחירון</h1>
      <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
        שירותים ומחירים. להצעות חבילות שאל ב-WhatsApp.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {services.map((service) => (
          <div key={service.id} style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ 
                color: '#ffffff', 
                fontWeight: '600', 
                fontSize: '18px',
                marginBottom: '4px'
              }}>
                {service.name}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px' }}>
                {service.description}
              </div>
            </div>
            <div style={{ 
              color: '#d4af37', 
              fontWeight: 'bold', 
              fontSize: '18px',
              marginLeft: '16px'
            }}>
              {service.price}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '32px', 
        padding: '16px', 
        backgroundColor: 'rgba(30, 41, 59, 0.5)', 
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <a 
          href="https://wa.me/972505812495"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#d4af37',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          שאל אותנו ב-WhatsApp →
        </a>
      </div>
    </div>
  );
}
