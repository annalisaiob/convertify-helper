import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <>
            {props.open && (
              <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] animate-in fade-in-0" 
                onClick={() => props.onOpenChange?.(false)}
              />
            )}
            <Toast key={id} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          </>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
