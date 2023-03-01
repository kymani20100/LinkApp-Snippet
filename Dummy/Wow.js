const Card = (data) => {
    const navigation = useNavigation();
    const { props, isHighlighted } = data;
  
    // Define your styles
    const styles = StyleSheet.create({
      touchableBg: {
        backgroundColor: isHighlighted ? '#2a2723' : '#2e2a25',
      },
      contactItem: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        height: 40,
        width: '95%',
        marginLeft: 10,
        backgroundColor: isHighlighted ? '#2a2723' : '#2e2a25',
        justifyContent: 'center',
        borderBottomColor: '#161412',
        borderBottomWidth: 0.5,
      },
      contactList: {
        fontFamily: isHighlighted ? 'Roboto_400Regular' : 'Roboto_300Light',
        color: isHighlighted ? '#f6a344' : '#fbcf9c',
        letterSpacing: 1,
      },
    });
  
    // Rest of your code
  };
  