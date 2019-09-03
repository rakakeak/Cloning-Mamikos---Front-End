<Icon name={
  (this.state.isFavorite.id == data.id && this.state.isFavorite.fav) ? 'favorite' : 'favorite-border'
} color={
  (this.state.isFavorite.id == data.id && this.state.isFavorite.fav) ? 'tomato' : 'gray'
} size={28} style={{position: 'absolute', right: 20, top: -18, backgroundColor: 'white', padding: 8, elevation: 4, borderRadius: 50}} onPress={
  () => this.setState({isFavorite: {
    id: data.id,
    fav: true
  }})
} />