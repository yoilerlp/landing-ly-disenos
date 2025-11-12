import { icons } from '@/assets';
import type { useTranslationsObject } from '@/config/i18n';

export const useWorkFlowContentOrganized = (
  t: ReturnType<typeof useTranslationsObject>
) => {
  const { steps, title } = t.workflow;

  const workflowIcons = [
    icons.Ellipse,
    icons.TresEllipse,
    icons.TresEllipseWithAro,
    icons.TresEllipseWithTwoAros,
    icons.TresEllipseWithTresAros,
  ];

  return {
    workFlowSteps: steps,
    workFlowIcons: workflowIcons,
    workFlowTitle: title,
  };
};

