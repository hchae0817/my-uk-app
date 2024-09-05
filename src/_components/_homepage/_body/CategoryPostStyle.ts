// CategoryPostsStyles.js

export const categoryPostsStyles = {
  container: {
    display: 'flex',
    //flexWrap: 'wrap', // Wrap cards to new lines if needed
    gap: 2, // Space between cards
    justifyContent: 'center', // Center cards horizontally
    //overflow: 'hidden', // Hide overflow for better responsiveness
    overflowX: "scroll",
    marginTop: 2,
    width: "100%"
  },
  card: {
    flex: '1 1 auto', // Flex-grow and flex-shrink properties
    flexDirection: "column",
    scrollSnapAlign: "start",
    // maxWidth: 300, // Maximum width of cards
    // minWidth: 200, // Minimum width of cards
    // margin: 1, // Margin around cards
    boxShadow: 3, // Box shadow for depth
    borderRadius: 2, // Rounded corners
  },
  media: {
    height: 140, // Height of the media image
  },
};
