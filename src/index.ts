import Waves, {TLong} from "@waves/waves-js";
import Provider from "@waves.exchange/storage-provider";


const provider = new Provider();
export const waves = new Waves();

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    .waves__donate-button {
        background: rgb(73, 80, 96); color: white; padding: 20px 30px; border-radius: 5px; border: none; font-size: 20px;
    }`.trim();
document.getElementsByTagName('head')[0].appendChild(style);

waves.setProvider(provider);

export function donate(element: HTMLElement, amount: TLong) {
    waves
        .transfer({
            recipient: element.getAttribute("data-recipient")!,
            amount: amount,
            assetId: "WAVES"
        })
        .broadcast()
        .then(
            () => {
                element.innerHTML = 'Spasiba!'
            },
            (e) => {
                element.innerHTML = 'Deneg net!'
            }
        );
}
