import { Font } from 'expo';

interface AppProps {
  dispatch: Dispatch<any>;
  nav: NavigationState;
}

export class App extends Component<AppProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      isFontLoaded: false
    };
  }
  public componentDidMount() {
    Font.loadAsync({
      '<customFontName>': require('../assets/fonts/<customFontName>.ttf')
    }).then(() => this.setState({ isFontLoaded: true }));
  }

  public render() {
    return (this.state as any).isFontLoaded ? <App /> : null;
  }
}