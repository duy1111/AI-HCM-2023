

// import Categories from "./Categories";
import {  useSelector } from "react-redux";
import { Button } from "../../components";
import Container from "./Container";
import OCRsearch from "./OCRsearch";
import ObjectDetection from "./ObjectSearch";
import Search from "./Search";
import { SubmitPath } from "../../services/image";
import Swal from "sweetalert2";



const Navbar= ({currentUser}) => {
    const {images} = useSelector(state => state.image)
    const submit = async() => {
        const response = await SubmitPath(images)
        if (response && response.status === 200) {
            Swal.fire('Thành công', 'Đã Submit', 'success');
        } else if (response && response.data?.err !== 0) {

            Swal.fire('Oops !', 'Có lỗi gì rồi đấy', 'error');
        }
    }
    return ( 
        <div className="fixed w-full bg-white z-10 shadow-sm" >
            <div className="p-4 border-b " >
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Search label='text search' />
                        <OCRsearch data={images} label='ocr search' />
                        <ObjectDetection data={images} label='object detection' />
                        <div className="w-[120px] flex flex-col justify-center items-center"><Button small label={'Submit'} onClick={submit} /></div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;