import toaster from 'toasted-notes';
import { MessageOptionalOptions } from 'toasted-notes/lib/ToastManager';
import { MessageProp } from 'toasted-notes/lib/Message';

const defaultDuration = 5000;

const Notify = {
  bottom: (message: MessageProp, options?: MessageOptionalOptions) => {
    toaster.notify(message, {
      position: 'bottom',
      duration: defaultDuration,
      ...options,
    });
  },
};

export default Notify;
