/**
 * 翻转效果
 * @param  {String} type  in|out
 * @param  {EventObject} event
 */
export default function flip(type, event) {

    const [time, class_in, class_out] = [225, 'in', 'out']

    let $box = $(event.srcElement).closest('.box')
    let $img = $box.find('img')
    let $des = $box.find('.des')
    let $flipOut = type === class_in ? $img : $des
    let $flipIn = type === class_in ? $des : $img
    let pointer = $box.data('pointer')

    $flipOut.addClass(class_out).removeClass(class_in)

    if (pointer) {
        clearTimeout(pointer)
        $box.data('pointer', null)
    }

    pointer = setTimeout(() => {
        $flipIn.addClass(class_in).removeClass(class_out)
    }, time)
    $box.data('poiner', pointer)

}

