/** @type { import('@storybook/html').Meta } */
const meta = {
  title: 'Components/Stepper',
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'range', min: 1, max: 5 },
      description: '현재 진행 단계',
    },
  },
};
export default meta;

const steps = ['약관동의', '정보입력', '본인인증', '닉네임', '완료'];

function createStepper(currentStep = 3) {
  const div = document.createElement('div');
  div.className = 'progress-bar';
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
  div.style.gap = '0';

  steps.forEach((label, i) => {
    const step = i + 1;
    const isDone = step < currentStep;
    const isActive = step === currentStep;

    const stepDiv = document.createElement('div');
    stepDiv.className = `progress-step${isDone ? ' done' : ''}${isActive ? ' active' : ''}`;

    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    dot.textContent = isDone ? '\u2713' : step;

    const span = document.createElement('span');
    span.textContent = label;

    stepDiv.appendChild(dot);
    stepDiv.appendChild(span);
    div.appendChild(stepDiv);

    if (i < steps.length - 1) {
      const line = document.createElement('div');
      line.className = 'progress-line';
      line.style.flex = '1';
      line.style.maxWidth = '60px';
      line.style.height = '2px';
      line.style.background = isDone ? 'var(--accent-orange)' : 'var(--border-color)';
      div.appendChild(line);
    }
  });

  return div;
}

export const Step1 = {
  args: { currentStep: 1 },
  render: ({ currentStep }) => createStepper(currentStep),
};

export const Step3 = {
  args: { currentStep: 3 },
  render: ({ currentStep }) => createStepper(currentStep),
};

export const Completed = {
  args: { currentStep: 6 },
  render: ({ currentStep }) => createStepper(currentStep),
};
