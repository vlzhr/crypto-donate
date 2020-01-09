import Waves, {TLong} from "@waves/signer";
import Provider from "@waves.exchange/provider-web";


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
                label.innerHTML = 'Thanks for your donation!';
            },
            (e) => {
                label.innerHTML = 'An error occurred. Check the console!';
                console.log(e);
            }
        );
}
