export const BodyStyles = {
  ContainerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    gap: 6, // Space between sections
    minHeight: '100vh',
  },

  MessageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow
    width: '80vw',
    textAlign: 'center',
    marginBottom: '40px',
  },
  ViewAllButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', // Button shadow for depth
    '&:hover': {
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', // Larger shadow on hover
    },
  },
};
