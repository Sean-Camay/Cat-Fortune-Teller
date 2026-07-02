import { useState } from 'react'
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  // RadioGroup,
  // FormControlLabel,
  // Radio,
  Box,
  Select,
  MenuItem,
  Typography,
  Paper,
  Divider,
  InputLabel,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { saveFortune } from '../../store/fortuneSlice'
import { FortuneTemplate, fortuneTemplates } from '../../data/fortuneTemplate'

export const Sandbox = () => {
  const [customFortune, setCustomFortune] = useState('')
  const [tone, setTone] = useState('cat-themed')
  const [useTemplate, setUseTemplate] = useState(false)
  const [selectedTemplate, setSelectedTemplate] =
    useState<FortuneTemplate | null>(null)
  const [placeholderValues, setPlaceholderValues] = useState<
    Record<string, string>
  >({})

  const dispatch = useDispatch()

  const generatePreview = () => {
    if (!selectedTemplate) return ''

    let preview = selectedTemplate.template
    for (const placeholder of selectedTemplate.placeholders) {
      const value = placeholderValues[placeholder] || `[${placeholder}]`
      preview = preview.replace(`[${placeholder}]`, value)
    }
    return preview
  }

  const handleCreateFortune = () => {
    const fortuneText =
      useTemplate && selectedTemplate ? generatePreview() : customFortune

    if (!fortuneText.trim()) return

    try {
      dispatch(
        saveFortune({
          text: fortuneText,
          tone: tone as
            | 'cat-themed'
            | 'humorous'
            | 'inspirational'
            | 'mysterious',
        }),
      )
      setCustomFortune('')
      setPlaceholderValues({})
    } catch (error) {
      console.error('Error creating fortune:', error)
    }
  }

  const handlePlaceholderChange = (placeholder: string, value: string) => {
    setPlaceholderValues((prev) => ({
      ...prev,
      [placeholder]: value,
    }))
  }

  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen'>
        <h1 className='m-4 text-white'>Sandbox</h1>
        <div className='mt-4 flex flex-col items-center text-black'>
          <div className='flex p-4'>
            <FormControl fullWidth className=''>
              <FormLabel sx={{ color: 'white' }}>Fortune Type</FormLabel>

              <Select
                autoWidth
                value={useTemplate ? 'template' : 'freeform'}
                onChange={(e) => setUseTemplate(e.target.value === 'template')}
              >
                <MenuItem value='freeform'>Freeform</MenuItem>
                <MenuItem value='template'>Template</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider className='w-full my-6' />

          {/* Freeform Section */}
          {!useTemplate && (
            <div className='flex m-6'>
              <FormControl className='m-4'>
                <FormLabel sx={{ color: 'white' }}>Select Tone</FormLabel>

                <Select
                  autoWidth
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <MenuItem value='inspirational'>Inspirational</MenuItem>
                  <MenuItem value='humorous'>Humorous</MenuItem>
                  <MenuItem value='mysterious'>Mysterious</MenuItem>
                  <MenuItem value='cat-themed'>Cat-Themed</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}

          {/* FreeForm Input */}
          {!useTemplate && (
            <TextField
              id='outline-basic'
              className='w-full'
              label='Create a fortune'
              variant='outlined'
              value={customFortune}
              onChange={(e) => setCustomFortune(e.target.value)}
              multiline
              rows={4}
            />
          )}

          {/* Template Selection */}
          {useTemplate && (
            <Box className='w-full mt-6'>
              <FormControl fullWidth sx={{ width: '20em' }}>
                <InputLabel sx={{ color: 'white' }}>
                  Select Template...
                </InputLabel>
                <Select
                  autoWidth
                  label='Select Template...'
                  value={selectedTemplate?.id || ''}
                  onChange={(e) => {
                    const template = fortuneTemplates.find(
                      (t) => t.id === e.target.value,
                    )
                    setSelectedTemplate(template || null)
                    setPlaceholderValues({})
                  }}
                >
                  {fortuneTemplates.map((template) => (
                    <MenuItem key={template.id} value={template.id}>
                      {template.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Placeholder Inputs */}
              {selectedTemplate && (
                <>
                  <Divider className='w-full my-6' />

                  <Box className='m-4 w-full'>
                    <Typography variant='h6' className='mb-4'>
                      Fill in the blanks:
                    </Typography>
                    {selectedTemplate.placeholders.map((placeholder) => (
                      <TextField
                        className='m-2 w-full'
                        key={placeholder}
                        label={`${placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}`}
                        variant='outlined'
                        value={placeholderValues[placeholder] || ''}
                        onChange={(e) =>
                          handlePlaceholderChange(placeholder, e.target.value)
                        }
                      />
                    ))}

                    <Divider className='w-full my-6' />

                    {/* Preview */}
                    <Paper className='m-4 p-4 bg-gray-100'>
                      <Typography variant='subtitle2' className='text-gray-600'>
                        Preview:
                      </Typography>
                      <Typography variant='body1' className='mt-2 italic'>
                        {generatePreview()}
                      </Typography>
                    </Paper>
                  </Box>
                </>
              )}
            </Box>
          )}

          <Divider className='w-full my-6' />

          <Button
            className='m-4 p-2 bg-blue-500 text-white rounded'
            onClick={handleCreateFortune}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}
