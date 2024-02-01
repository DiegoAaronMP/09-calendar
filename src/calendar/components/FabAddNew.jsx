import { useDispatch } from "react-redux"
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from "date-fns";

export const FabAddNew = () => {


    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                id: '123',
                name: 'Diego'
            }
        });
        openDateModal();
    }
    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}>
            <i className="fa fa-plus"></i>
        </button>
    )
}
