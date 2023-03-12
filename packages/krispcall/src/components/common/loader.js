import { styled, connect} from "frontity";
import LoaderCss from "../../assets/css/loading.min.css"

const Loading = ({addClass}) => (
    <Loader>
        <div className={`preloader ${addClass}`}></div>
    </Loader>
);

export default connect(Loading);
const Loader = styled.div(LoaderCss)

  