import Waves, {TLong} from "@waves/waves-js";
import Provider from "@waves.exchange/storage-provider";


const provider = new Provider();
export const waves = new Waves();

waves.setProvider(provider);

export function donate(element: HTMLElement, amount: TLong) {
    const label = document.querySelector(".waves__donate-label")!;
    waves
        .transfer({
            recipient: element.getAttribute("data-recipient")!,
            amount: amount,
            assetId: "WAVES"
        })
        .broadcast()
        .then(
            () => {
                label.innerHTML = 'Thank you for the donate!';
            },
            (e) => {
                label.innerHTML = 'Here is an error &#129300; Check the console!';
                console.log(e);
            }
        );
}
