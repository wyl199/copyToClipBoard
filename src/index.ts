export default function copyToClipBoard(value: string): Promise<void> {
    return new Promise((resolve, reject) => {
        let input = document.getElementById('clipboard') as HTMLInputElement;
        if (!input) {
            input = document.createElement('input');
            input.id = 'clipboard';
            document.body.appendChild(input);
        }
        input.setAttribute('value', value);
        input.style.display = 'block';
        if (input?.select) {
            input.select();
            try {
                document.execCommand('copy') ? resolve() : reject();
            } catch (err) {
                reject(err);
            }
        }
        input.style.display = 'none';
    })
}